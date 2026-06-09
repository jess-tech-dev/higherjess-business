// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contactBtn');

    contactBtn.addEventListener('click', () => {
        alert('Thank you for reaching out to Higherjess Business! This button works.');
    });
});
// DARK MODE SYSTEM (persistent + modern UX)

const toggle = document.createElement("button");
toggle.innerHTML = "🌙";
toggle.style.position = "fixed";
toggle.style.top = "20px";
toggle.style.right = "20px";
toggle.style.zIndex = "999";
toggle.style.padding = "10px";
toggle.style.borderRadius = "50%";
toggle.style.border = "none";
toggle.style.cursor = "pointer";
toggle.style.background = "#1f1f1f";
toggle.style.color = "#fff";

document.body.appendChild(toggle);

// Apply theme
function setTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem("theme", mode);
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

// Toggle
toggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  setTheme(newTheme);
  toggle.innerHTML = newTheme === "dark" ? "🌙" : "☀️";
});