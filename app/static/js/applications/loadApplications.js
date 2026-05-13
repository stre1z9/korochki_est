export function loadApplications() {
    return JSON.parse(
        localStorage.getItem('applications')
    ) || [];
}