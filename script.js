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
const socials = [
  { icon: "fab fa-facebook", link: "https://facebook.com" },
  { icon: "fab fa-linkedin", link: "https://linkedin.com" },
  { icon: "fab fa-github", link: "https://github.com" },
  { icon: "fab fa-youtube", link: "https://youtube.com" },
  { icon: "fab fa-whatsapp", link: "https://wa.me/2437817177" }
];

const container = document.createElement("div");
container.style.position = "fixed";
container.style.bottom = "20px";
container.style.left = "20px";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "10px";
container.style.zIndex = "999";

socials.forEach(s => {
  const a = document.createElement("a");
  a.href = s.link;
  a.target = "_blank";
  a.innerHTML = `<i class="${s.icon}"></i>`;
  a.style.background = "#1f1f1f";
  a.style.color = "#fff";
  a.style.padding = "12px";
  a.style.borderRadius = "50%";
  a.style.textAlign = "center";
  a.style.fontSize = "18px";
  a.style.textDecoration = "none";

  container.appendChild(a);
});

document.body.appendChild(container);