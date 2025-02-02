const appearance_btn = document.querySelector(".appearance_btn");
var theme = localStorage.getItem("theme");



// Check for the dark mode when the page loads
theme === "darkmode" && document.body.classList.add("darkmode");



// An interactive theme toggler
appearance_btn.addEventListener("click", () => {
    // Toggle between light and dark mode
    document.body.classList.toggle("darkmode");

    // Update the local storage
    if (document.body.classList.contains("darkmode")) {
        localStorage.setItem("theme", "darkmode");
    }
    else {
        localStorage.setItem("theme", "lightmode");
    }
});