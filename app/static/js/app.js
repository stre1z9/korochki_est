import { initNavbar } from './components/navbar.js';
import { initCreateApplication } from './applications/createApplication.js';
import { renderApplications } from './applications/renderApplications.js';
import { initReviewForm } from './reviews/createReview.js';
import { protectRoute } from './utils/protectRoutes.js';
document.addEventListener('DOMContentLoaded',
() => {
    initNavbar();
    initCreateApplication();
    initReviewForm();
    renderApplications();
    protectRoute();
    window.addEventListener(
        'applicationsUpdated',
        renderApplications
    );
});