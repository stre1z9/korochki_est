const API_URL = 'http://127.0.0.1:5000/api/admin';

export async function loadAllApplications() {

    const response = await fetch(
        `${API_URL}/applications`
    );

    return await response.json();
}

export async function updateStatus(
    applicationId,
    status
) {

    const response = await fetch(
        `${API_URL}/applications/${applicationId}`,
        {
            method: 'PUT',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                status
            })
        }
    );

    return await response.json();
}