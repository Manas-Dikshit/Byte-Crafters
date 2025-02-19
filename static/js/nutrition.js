document.querySelector(".back-btn").addEventListener("click", function() {
    window.history.back();
});

// Theme Toggle Logic
const themeToggle = document.querySelector(".toggle-theme");

// Check if theme is stored in localStorage
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "☀️"; // Set icon to sun
}

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    
    // Update theme icon
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️"; // Sun icon for light mode
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙"; // Moon icon for dark mode
    }
});

function navigate(page) {
    window.location.href = page;
}
