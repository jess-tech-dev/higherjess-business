document.addEventListener("DOMContentLoaded", () => {

  // ===== DARK MODE =====
  const toggle = document.createElement("button");
  toggle.innerHTML = "🌙";
  toggle.style.position = "fixed";
  toggle.style.top = "20px";
  toggle.style.right = "20px";
  toggle.style.zIndex = "999";

  document.body.appendChild(toggle);

  function setTheme(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
  }

  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";
    setTheme(newTheme);
    toggle.innerHTML = newTheme === "dark" ? "🌙" : "☀️";
  });

  // ===== WHATSAPP FIX =====
  const wa = document.createElement("a");
  wa.href = "https://wa.me/2437817177";
  wa.target = "_blank";
  wa.innerHTML = "💬";

  Object.assign(wa.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "white",
    width: "55px",
    height: "55px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    fontSize: "24px",
    zIndex: "999"
  });

  document.body.appendChild(wa);

});