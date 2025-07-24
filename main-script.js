// main-script.js

// Dark/Light Mode Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check local storage for theme preference on page load
// This ensures the theme persists across pages and sessions
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

// Add event listener for the theme toggle button
themeToggle.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.theme = 'light'; // Save preference
    } else {
        htmlElement.classList.add('dark');
        localStorage.theme = 'dark'; // Save preference
    }
});
