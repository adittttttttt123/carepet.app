const API_BASE = '/api';

const auth = {
    // Helper for authenticated requests
    async fetch(url, options = {}) {
        const token = localStorage.getItem('carepet_token');
        const headers = {
            'Content-Type': 'application/json',
            ...(options.headers || {})
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`${API_BASE}${url}`, {
            ...options,
            headers
        });

        // Handle 401 Unauthorized globally
        if (response.status === 401) {
            this.logout();
            window.location.href = '/login.html';
            return;
        }

        return response.json();
    },

    async login(email, password) {
        const response = await fetch(`${API_BASE}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('carepet_token', data.token);
            localStorage.setItem('carepet_user', JSON.stringify(data.user));
            return data;
        } else {
            throw new Error(data.error || 'Login failed');
        }
    },

    async register(userData) {
        const response = await fetch(`${API_BASE}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Registration failed');
        return data;
    },

    logout() {
        localStorage.removeItem('carepet_token');
        localStorage.removeItem('carepet_user');
        window.location.href = '/login.html';
    },

    getUser() {
        const u = localStorage.getItem('carepet_user');
        return u ? JSON.parse(u) : null;
    }
};

window.auth = auth;
