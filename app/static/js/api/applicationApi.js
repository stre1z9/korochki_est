const API_URL = 'http://127.0.0.1:5000/api/applications';

export async function createApplication(data) {
    const response = await fetch(
        API_URL,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    );
    return await response.json();
}
export async function loadApplications(userId) {
    const response = await fetch(
        `${API_URL}/${userId}`
    );
    return await response.json();
}