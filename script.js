const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    if(nav.style.display === "block"){
        nav.style.display = "none";
    }else{
        nav.style.display = "block";
    }

});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thank you for contacting Higherjess Business!");

    form.reset();

});