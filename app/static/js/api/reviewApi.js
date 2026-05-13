const API_URL = 'http://127.0.0.1:5000/api/reviews';

export async function createReview(data) {

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