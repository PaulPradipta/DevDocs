
let themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', null);
}

if (localStorage.getItem('dark-mode') === 'active') {
    enableDarkmode();
}

themeSwitch.addEventListener("click", () => {
    let darkmode = localStorage.getItem('dark-mode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
