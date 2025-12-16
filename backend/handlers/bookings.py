import uuid
from database import db
from handlers.auth import get_current_user

def get_user_bookings(token):
    user = get_current_user(token)
    if not user:
        return {"error": "Unauthorized"}, 401
    
    # Join with hewan and layanan for better readability in frontend
    query = """
        SELECT p.*, h.nama_hewan, l.nama_layanan 
        FROM pemesanan p
        JOIN hewan h ON p.id_hewan = h.id_hewan
        JOIN layanan l ON p.id_layanan = l.id_layanan
        WHERE h.id_pengguna = %s
        ORDER BY p.tgl_masuk DESC
    """
    bookings = db.fetch_all(query, (user['id_pengguna'],))
    return bookings, 200

def create_booking(data, token):
    user = get_current_user(token)
    if not user:
        return {"error": "Unauthorized"}, 401

    id_hewan = data.get('id_hewan')
    id_layanan = data.get('id_layanan')
    tgl_masuk = data.get('tgl_masuk')
    tgl_keluar = data.get('tgl_keluar')

    if not id_hewan or not id_layanan or not tgl_masuk or not tgl_keluar:
        return {"error": "Missing required fields"}, 400

    # Validate ownership of pet
    pet_check = db.fetch_one("SELECT id_hewan FROM hewan WHERE id_hewan = %s AND id_pengguna = %s", (id_hewan, user['id_pengguna']))
    if not pet_check:
        return {"error": "Invalid pet"}, 400

    id_pemesanan = uuid.uuid4().hex[:8]
    status = "Pending"
    
    query = """
        INSERT INTO pemesanan (id_pemesanan, id_hewan, id_layanan, tgl_masuk, tgl_keluar, status)
        VALUES (%s, %s, %s, %s, %s, %s)
    """
    params = (id_pemesanan, id_hewan, id_layanan, tgl_masuk, tgl_keluar, status)
    
    result = db.execute(query, params)
    
    if result is not None:
        return {"message": "Booking created", "id": id_pemesanan}, 201
    else:
        return {"error": "Failed to create booking"}, 500
