const API_URL = 'http://korochki-est-vkbs.onrender.com/api';

export async function registerUser(data) {

    const response = await fetch(
        `${API_URL}/register`,
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

export async function loginUser(data) {

    const response = await fetch(
        `${API_URL}/login`,
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
