// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contactBtn');

    contactBtn.addEventListener('click', () => {
        alert('Thank you for reaching out to Higherjess Business! This button works.');
    });
});
