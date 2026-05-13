const API_URL = 'http://korochki-est-vkbs.onrender.com/api/admin';

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
