const API_URL = 'http://korochki-est-vkbs.onrender.com/api/reviews';

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
