document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const sections = document.querySelectorAll("main");
    const themeToggle = document.getElementById("theme-toggle");

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Toggle menu visibility
    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('menu-hidden');
    });

    // Function to display a specific section
    window.showSection = function (sectionId) {
        sections.forEach((section) => section.style.display = 'none');
        document.getElementById(sectionId).style.display = 'block';
    };
});

