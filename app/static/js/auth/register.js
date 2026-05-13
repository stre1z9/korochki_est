import {registerUser} from '../api/authApi.js';
import {showToast} from '../components/toast.js';
const form = document.getElementById('registerForm');
form.addEventListener('submit',
async (event) => {
    event.preventDefault();
    const data = {
        login: document.getElementById('login').value,
        password: document.getElementById('password').value,
        full_name: document.getElementById('fullName').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value
    };
    try {
        const response = await registerUser(data);
        showToast(response.message);
        if (response.success) {
            setTimeout(() => {
                window.location.href =
                    '/login';
            }, 1500);
        }
    } catch (error) {
        showToast('Ошибка сервера');
    }
});