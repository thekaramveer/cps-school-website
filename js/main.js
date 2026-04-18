const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".navigation-container");
const navLinks = document.querySelectorAll(".navigation-container a");

// Toggle menu
menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    if (
        nav.classList.contains("active") &&
        !nav.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        nav.classList.remove("active");
    }
});

// Close when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});