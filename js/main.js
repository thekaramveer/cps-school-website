const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".navigation-container");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
