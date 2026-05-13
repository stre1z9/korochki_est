import {loadApplications} from '../api/applicationApi.js';
export async function renderApplications() {
    const tbody = document.getElementById('applicationsTableBody');
    const reviewSelect = document.getElementById('reviewApplication');
    const userId = localStorage.getItem('user_id');
    const applications = await loadApplications(userId);
    tbody.innerHTML = '';
    reviewSelect.innerHTML = '';
    applications.forEach((application) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${application.course_name}</td>
            <td>${application.start_date}</td>
            <td>${application.payment_method}</td>
            <td>
                <span class="status status-new">
                    ${application.status}
                </span>
            </td>
            <td>${application.created_at}</td>
        `;
        tbody.appendChild(tr);
        const option = document.createElement('option');
        option.value = application.id;
        option.innerText = application.course_name;
        reviewSelect.appendChild(option);
    });
}