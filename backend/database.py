import mysql.connector
from mysql.connector import Error, MySQLConnection
from typing import Optional, List, Dict, Any, Tuple

class DatabaseManager:
    """
    Singleton Class to manage MySQL database connections and operations.
    Provides encapsulated methods for executing queries and fetching data.
    """
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(DatabaseManager, cls).__new__(cls)
            cls._instance._init_config()
        return cls._instance

    def _init_config(self):
        self.config = {
            'host': 'localhost',
            'database': 'carepet',
            'user': 'root',
            'password': '',
            'raise_on_warnings': True
        }

    def _get_connection(self) -> Optional[MySQLConnection]:
        """Creates and returns a new database connection."""
        try:
            return mysql.connector.connect(**self.config)
        except Error as e:
            print(f"[DB Error] Connection failed: {e}")
            return None

    def execute(self, query: str, params: Optional[Tuple] = None) -> Optional[int]:
        """
        Executes a data manipulation query (INSERT, UPDATE, DELETE).
        Returns the last row ID for INSERT operations, or None on failure.
        """
        conn = self._get_connection()
        if not conn:
            return None

        cursor = None
        try:
            cursor = conn.cursor()
            cursor.execute(query, params)
            conn.commit()
            return cursor.lastrowid
        except Error as e:
            print(f"[DB Error] Execute failed: {e}\nQuery: {query}")
            return None
        finally:
            if cursor: cursor.close()
            conn.close()

    def fetch_one(self, query: str, params: Optional[Tuple] = None) -> Optional[Dict[str, Any]]:
        """
        Fetches a single row from the database.
        Returns a dictionary representing the row, or None if not found.
        """
        conn = self._get_connection()
        if not conn:
            return None

        cursor = None
        result = None
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute(query, params)
            result = cursor.fetchone()
        except Error as e:
            print(f"[DB Error] Fetch One failed: {e}\nQuery: {query}")
        finally:
            if cursor: cursor.close()
            conn.close()
        return result

    def fetch_all(self, query: str, params: Optional[Tuple] = None) -> List[Dict[str, Any]]:
        """
        Fetches all rows matching the query.
        Returns a list of dictionaries.
        """
        conn = self._get_connection()
        if not conn:
            return []

        cursor = None
        results = []
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.execute(query, params)
            results = cursor.fetchall()
        except Error as e:
            print(f"[DB Error] Fetch All failed: {e}\nQuery: {query}")
        finally:
            if cursor: cursor.close()
            conn.close()
        return results

# Initialize a global instance
db = DatabaseManager()
