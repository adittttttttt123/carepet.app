from database import db

def get_all_services():
    """
    Fetch all available services from the database.
    """
    query = "SELECT * FROM layanan"
    services = db.fetch_all(query)
    return services, 200
