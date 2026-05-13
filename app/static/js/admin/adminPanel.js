import {loadAllApplications, updateStatus} from '../api/adminApi.js';
import {protectAdmin} from '../utils/protectAdmin.js';
protectAdmin();
async function renderAdminApplications() {
    const tbody = document.getElementById('adminApplicationsBody');
    const applications = await loadAllApplications();
    tbody.innerHTML = '';
    applications.forEach((application) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${application.id}</td>
            <td>${application.course_name}</td>
            <td>${application.start_date}</td>
            <td>${application.payment_method}</td>
            <td>${application.status}</td>
            <td>
                <select
                    class="status-select"
                    data-id="${application.id}"
                >
                    <option
                        value="Новая"
                        ${application.status === 'Новая'
                            ? 'selected'
                            : ''}
                    >
                        Новая
                    </option>
                    <option
                        value="Идет обучение"
                        ${application.status === 'Идет обучение'
                            ? 'selected'
                            : ''}
                    >
                        Идет обучение
                    </option>
                    <option
                        value="Обучение завершено"
                        ${application.status === 'Обучение завершено'
                            ? 'selected'
                            : ''}
                    >
                        Обучение завершено
                    </option>
                </select>
                <button
                    class="btn-primary update-btn"
                    data-id="${application.id}"
                >
                    Сохранить
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    initUpdateButtons();
}
function initUpdateButtons() {
    const buttons = document.querySelectorAll('.update-btn');
    buttons.forEach((button) => {
        button.addEventListener(
            'click',
            async () => {
                const applicationId = button.dataset.id;
                const select = document.querySelector(`.status-select[data-id="${applicationId}"]`);
                const status = select.value;
                const response = await updateStatus(applicationId, status);
                alert(response.message);
                renderAdminApplications();
            }
        );
    });
}
document.addEventListener(
    'DOMContentLoaded',
    renderAdminApplications
);