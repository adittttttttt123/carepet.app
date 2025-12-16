import hashlib
import os
import uuid
import datetime
from database import execute_query, fetch_one

def hash_password(password):
    """Hash a password using PBKDF2 with a random salt."""
    salt = os.urandom(32) # 32 bytes salt
    key = hashlib.pbkdf2_hmac(
        'sha256', # The hash digest algorithm for HMAC
        password.encode('utf-8'), # Convert the password to bytes
        salt, # Provide the salt
        100000 # It is recommended to use at least 100,000 iterations of SHA-256 
    )
    # Return salt + key (hex encoded) so we can store it
    return salt.hex() + ':' + key.hex()

def verify_password(stored_password, provided_password):
    """Verify a stored password against one provided by user"""
    try:
        salt_hex, key_hex = stored_password.split(':')
        salt = bytes.fromhex(salt_hex)
        key = bytes.fromhex(key_hex)
        
        new_key = hashlib.pbkdf2_hmac(
            'sha256',
            provided_password.encode('utf-8'),
            salt,
            100000
        )
        return new_key == key
    except Exception:
        return False

def register(data):
    nama = data.get('nama')
    email = data.get('email')
    password = data.get('password')
    no_hp = data.get('no_hp', '')
    alamat = data.get('alamat', '')
    
    if not email or not password or not nama:
        return {"error": "Missing required fields"}, 400

    # check if email exists
    existing = fetch_one("SELECT id_pengguna FROM pengguna WHERE email = %s", (email,))
    if existing:
        return {"error": "Email already registered"}, 409

    hashed = hash_password(password)
    # ID Generation (Simple hex, or UUID)
    id_pengguna = uuid.uuid4().hex[:6]

    query = """
        INSERT INTO pengguna (id_pengguna, nama_pengguna, email, password, no_hp, alamat)
        VALUES (%s, %s, %s, %s, %s, %s)
    """
    params = (id_pengguna, nama, email, hashed, no_hp, alamat)
    
    result = execute_query(query, params)
    
    if result is not None: # Insert successful
        return {"message": "Registration successful", "redirect": "/login"}, 201
    else:
        return {"error": "Registration failed"}, 500

def login(data):
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return {"error": "Missing credentials"}, 400

    user = fetch_one("SELECT * FROM pengguna WHERE email = %s", (email,))
    
    if not user or not verify_password(user['password'], password):
        return {"error": "Invalid email or password"}, 401

    # Create session
    session_id = str(uuid.uuid4())
    # Expires in 24 hours
    expires_at = datetime.datetime.now() + datetime.timedelta(hours=24)
    execute_query(
        "INSERT INTO sessions (session_id, user_id, expires_at) VALUES (%s, %s, %s)",
        (session_id, user['id_pengguna'], expires_at)
    )

    return {
        "message": "Login successful", 
        "token": session_id,
        "user": {
            "name": user['nama_pengguna'],
            "email": user['email']
        }
    }, 200

def get_current_user(token):
    if not token:
        return None
    session = fetch_one(
        "SELECT * FROM sessions WHERE session_id = %s AND expires_at > NOW()", 
        (token,)
    )
    if not session:
        return None
    
    user = fetch_one("SELECT id_pengguna, nama_pengguna, email, no_hp, alamat FROM pengguna WHERE id_pengguna = %s", (session['user_id'],))
    return user
