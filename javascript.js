const navbarToggle = document.querySelector(".hamburger"),
  navLinksToggle = document.querySelector(".links");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navLinksToggle.classList.toggle("active");
});

function setTheme(themeName) {
  document.body.setAttribute("data-theme", themeName);
  localStorage.setItem("user-theme", themeName);
}
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("user-theme");
  if (savedTheme) {
    setTheme(savedTheme);
  }
});
