import { logout } from '../auth/logout.js';
export function initNavbar() {
    const logoutButton =
        document.getElementById('logoutButton');

    if (logoutButton) {

        logoutButton.addEventListener('click', logout);
    }
}