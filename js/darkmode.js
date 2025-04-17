// Fonction pour définir un cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

// Fonction pour récupérer un cookie
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(`${name}=`)) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Fonction pour activer le mode sombre
const enableDarkmode = () => {
    document.body.classList.add('dark_mode');
    setCookie('dark_mode', 'active', 7); // Sauvegarde l'état dans un cookie pour 7 jours
};

// Fonction pour désactiver le mode sombre
const disableDarkmode = () => {
    document.body.classList.remove('dark_mode');
    setCookie('dark_mode', 'inactive', 7); // Sauvegarde l'état dans un cookie pour 7 jours
};

// Applique le mode sombre si le cookie est "active"
if (getCookie('dark_mode') === 'active') {
    enableDarkmode();
}

// Ajoute un événement au bouton pour basculer entre les modes
const theme_Switch = document.getElementById('theme_switch');
if (theme_Switch) {
    theme_Switch.addEventListener('click', () => {
        const isDarkMode = getCookie('dark_mode') === 'active';
        isDarkMode ? disableDarkmode() : enableDarkmode();
    });
}