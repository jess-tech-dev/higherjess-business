const menuBtn = document.querySelector(".menu-btn");
const navUl = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navUl.classList.toggle("active");
    });

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thank you for contacting Higherjess Business!");

    form.reset();

});