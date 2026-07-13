export function changeTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('theme-dark');
        localStorage.setItem('theme', 'dark');
    } 
    else {
        document.documentElement.classList.remove('theme-dark');
        localStorage.setItem('theme', 'light');
    }
    
}