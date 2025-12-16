import mysql.connector
from mysql.connector import Error

db_config = {
    'host': 'localhost',
    'database': 'carepet',
    'user': 'root',  # Default XAMPP/local userr
    'password': '',  # Default XAMPP password (empty)
    'raise_on_warnings': True
}

def get_connection():
    """Create a database connection to the MySQL database."""
    connection = None
    try:
        connection = mysql.connector.connect(**db_config)
    except Error as e:
        print(f"Error while connecting to MySQL: {e}")
    return connection

def execute_query(query, params=None):
    """Execute a single query (INSERT, UPDATE, DELETE)."""
    connection = get_connection()
    cursor = None
    if connection and connection.is_connected():
        try:
            cursor = connection.cursor(dictionary=True)
            cursor.execute(query, params)
            connection.commit()
            return cursor.lastrowid
        except Error as e:
            print(f"Error executing query: {e}")
            return None
        finally:
            if cursor: cursor.close()
            if connection: connection.close()
    return None

def fetch_one(query, params=None):
    """Fetch a single row."""
    connection = get_connection()
    cursor = None
    result = None
    if connection and connection.is_connected():
        try:
            cursor = connection.cursor(dictionary=True)
            cursor.execute(query, params)
            result = cursor.fetchone()
        except Error as e:
            print(f"Error fetching data: {e}")
        finally:
            if cursor: cursor.close()
            if connection: connection.close()
    return result

def fetch_all(query, params=None):
    """Fetch multiple rows."""
    connection = get_connection()
    cursor = None
    results = []
    if connection and connection.is_connected():
        try:
            cursor = connection.cursor(dictionary=True)
            cursor.execute(query, params)
            results = cursor.fetchall()
        except Error as e:
            print(f"Error fetching data: {e}")
        finally:
            if cursor: cursor.close()
            if connection: connection.close()
    return results
