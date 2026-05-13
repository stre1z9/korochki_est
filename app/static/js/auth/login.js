import {loginUser} from '../api/authApi.js';
import {showToast} from '../components/toast.js';
const form = document.getElementById('loginForm');
form.addEventListener('submit',
async (event) => {
    event.preventDefault();
    const data = {
        login: document.getElementById('login').value,
        password: document.getElementById('password').value
    };
    try {
        const response =
            await loginUser(data);
        showToast(response.message);
        if (response.success) {
            localStorage.setItem(
                'user_id',
                response.user_id
            );
            setTimeout(() => {
                window.location.href =
                    '/applications';
            }, 1000);
        }
    } catch (error) {
        showToast('Ошибка сервера');
    }
});
