// Add Recommendation
function addRecommendation() {
    let recommendation = document.getElementById("new_recommendation").value.trim();
    if (recommendation) {
        let element = document.createElement("div");
        element.classList.add("recommendation");
        element.innerHTML = `<p>"${recommendation}"</p>`;
        document.getElementById("all_recommendations").appendChild(element);
        document.getElementById("new_recommendation").value = "";
        showPopup(true);
    }
}

// Show Popup
function showPopup(show) {
    document.getElementById("popup").style.display = show ? "block" : "none";
}

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
