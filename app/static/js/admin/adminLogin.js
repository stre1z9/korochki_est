import { adminLogin } from '../api/adminAuthApi.js';
const form = document.getElementById( 'adminLoginForm' );
form.addEventListener(
    'submit',
    async (event) => {
        event.preventDefault();
        const data = {
            login: document.getElementById('login').value,
            password: document.getElementById('password').value
        };
        const response = await adminLogin(data);
        if (response.success) {
            localStorage.setItem(
                'admin_auth',
                'true'
            );
            window.location.href =
                '/admin';
        } else {
            alert(response.message);
        }
    }
);