const themeToggleBtn = document.getElementById('theme-toggle');
const icon = themeToggleBtn.querySelector('i');

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    icon.classList.replace('fa-moon', 'fa-sun');
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    let theme = 'light';
    if (document.body.classList.contains('dark-theme')) {
        theme = 'dark';
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
    
    localStorage.setItem('theme', theme);
});