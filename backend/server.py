from http.server import HTTPServer, SimpleHTTPRequestHandler # Use SimpleHTTPRequestHandler for static files
import json
import cgi
from urllib.parse import urlparse, parse_qs
import os
import sys

# Add backend directory to path to allow imports
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Placeholders for handlers (will be implemented next)
from handlers import auth, pets #, users

class RequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed_path = urlparse(self.path)
        path = parsed_path.path
        
        # API Routes
        if path.startswith('/api'):
            self.handle_api_get(path, parse_qs(parsed_path.query))
        else:
            # Serve Static Files (Frontend)
            # Map / to index.html, others to frontend/
            if path == '/':
                self.path = '/frontend/index.html'
            elif not path.startswith('/frontend'):
                self.path = '/frontend' + path
            return super().do_GET()

    def do_POST(self):
        parsed_path = urlparse(self.path)
        path = parsed_path.path

        if path.startswith('/api'):
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            try:
                data = json.loads(post_data.decode('utf-8'))
            except json.JSONDecodeError:
                self.send_error_response(400, "Invalid JSON")
                return

            self.handle_api_post(path, data)
        else:
            self.send_error_response(405, "Method Not Allowed")

    def handle_api_get(self, path, query_params):
        # Router logic
        response_data = None
        status = 200

        try:
            if path == '/api/health':
                 response_data = {"status": "ok"}
            elif path == '/api/pets':
                # Extract token from Authorization header or cookie (simplified: expect Header)
                token = self.headers.get('Authorization', '').replace('Bearer ', '')
                response_data, status = pets.get_all_pets(token)
            else:
                status = 404
                response_data = {"error": "Endpoint not found"}
        except Exception as e:
            print(f"Server Error: {e}")
            status = 500
            response_data = {"error": str(e)}

        self.send_json_response(status, response_data)

    def handle_api_post(self, path, data):
        response_data = None
        status = 200

        try:
            if path == '/api/login':
                response_data, status = auth.login(data)
            elif path == '/api/register':
                response_data, status = auth.register(data)
            elif path == '/api/pets':
                token = self.headers.get('Authorization', '').replace('Bearer ', '')
                response_data, status = pets.create_pet(data, token)
            else:
                status = 404
                response_data = {"error": "Endpoint not found"}
        except Exception as e:
            print(f"Server Error: {e}")
            status = 500
            response_data = {"error": str(e)}

        self.send_json_response(status, response_data)

    def send_json_response(self, status, data):
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))

    def send_error_response(self, status, message):
        self.send_json_response(status, {"error": message})

def run(server_class=HTTPServer, handler_class=RequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Starting server on port {port}...")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
    print("Server stopped.")

if __name__ == '__main__':
    # Change working directory to root so static file serving works correctly
    # Assumes server.py is in backend/ and run from root or backend/
    # If run from backend/, we need to go up one level
    import os
    if os.path.basename(os.getcwd()) == 'backend':
        os.chdir('..')
        
    run()
