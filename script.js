document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);

    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Collapse functionality
    const collapseToggle = document.querySelector('.collapse-toggle');
    const collapseContent = document.querySelector('.collapse-content');

    collapseToggle.addEventListener('click', () => {
        collapseToggle.classList.toggle('active');
        collapseContent.classList.toggle('active');
    });
});