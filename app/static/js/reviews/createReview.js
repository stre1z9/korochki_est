import { showToast }
from '../components/toast.js';
import { createReview } from '../api/reviewApi.js';
export function initReviewForm() {
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit',
    async (event) => {
        event.preventDefault();
        const data = {
            application_id: document.getElementById('reviewApplication').value,
            review_text: document.getElementById('reviewText').value
        };
        try {
            const response = await createReview(data);
            showToast(response.message);
            form.reset();
        } catch (error) {
            showToast('Ошибка сервера');
        }
    });
}