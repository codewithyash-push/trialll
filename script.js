function toggleTheme() {
     const body = document.body;
     body.classList.toggle('dark-theme');
     body.classList.toggle('light-theme');
 }
 
 // Load theme preference from localStorage
 document.addEventListener('DOMContentLoaded', () => {
     const theme = localStorage.getItem('theme');
     if (theme) {
         document.body.classList.toggle('dark-theme', theme === 'dark');
     }
 });
 
 document.querySelector('.theme-toggle').addEventListener('click', () => {
     const isDark = document.body.classList.toggle('dark-theme');
     localStorage.setItem('theme', isDark ? 'dark' : 'light');
 });
