const themeSelect = document.getElementById("theme");
const saveBtn = document.getElementById("saveBtn");
const themeText = document.getElementById("themeText");

// Load saved theme from localStorage on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  themeSelect.value = savedTheme;
  applyTheme(savedTheme);
}

saveBtn.addEventListener("click", function () {
  const selectedTheme = themeSelect.value;
  localStorage.setItem("theme", selectedTheme); // Save theme in localStorage
  applyTheme(selectedTheme);
});

function applyTheme(theme) {
  document.body.className = theme;
  themeText.textContent = theme === "light" ? "Light Theme" : "Dark Theme";
}
