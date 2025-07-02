// Toggle dark mode
(function () {
  const toggle = document.createElement("button");
  toggle.innerText = "🌙";
  toggle.id = "theme-toggle";
  toggle.setAttribute("aria-label", "Toggle dark mode");
  toggle.style.cssText = `
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 1.2rem;
    background: none;
    border: none;
    cursor: pointer;
  `;

  document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      body.classList.add("dark");
      toggle.innerText = "☀️";
    }

    toggle.addEventListener("click", () => {
      body.classList.toggle("dark");
      const isDark = body.classList.contains("dark");
      toggle.innerText = isDark ? "☀️" : "🌙";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });

    document.body.appendChild(toggle);
  });
})();
