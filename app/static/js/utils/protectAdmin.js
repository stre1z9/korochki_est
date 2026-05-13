export function protectAdmin() {
    const isAdmin = localStorage.getItem('admin_auth');
    if (isAdmin !== 'true') {
        window.location.href =
            '/admin-login';
    }
}