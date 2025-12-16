import uuid
from database import db
from handlers.auth import get_current_user

def get_all_pets(token):
    user = get_current_user(token)
    if not user:
        return {"error": "Unauthorized"}, 401
    
    query = "SELECT * FROM hewan WHERE id_pengguna = %s"
    pets = db.fetch_all(query, (user['id_pengguna'],))
    return pets, 200

def create_pet(data, token):
    user = get_current_user(token)
    if not user:
        return {"error": "Unauthorized"}, 401

    nama = data.get('nama_hewan')
    jenis = data.get('jenis')
    usia = data.get('usia')
    kebutuhan = data.get('kebutuhan_khusus', '')

    if not nama or not jenis or not usia:
        return {"error": "Missing required fields"}, 400

    id_hewan = uuid.uuid4().hex[:6]
    
    query = """
        INSERT INTO hewan (id_hewan, id_pengguna, nama_hewan, jenis, usia, kebutuhan_khusus)
        VALUES (%s, %s, %s, %s, %s, %s)
    """
    params = (id_hewan, user['id_pengguna'], nama, jenis, usia, kebutuhan)
    
    result = db.execute(query, params)
    
    if result is not None:
        return {"message": "Pet created", "id": id_hewan}, 201
    else:
        return {"error": "Failed to create pet"}, 500
