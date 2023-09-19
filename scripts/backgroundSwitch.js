const backgroundColor = document.getElementById("backgroundColor");
const body = document.body;

function toggleDarkMode() {
    body.classList.toggle("dark-mode");
}

backgroundColor.addEventListener("change", toggleDarkMode);