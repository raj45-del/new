document.addEventListener("DOMContentLoaded", function () {
    function updateGreeting(text) {
        var greetingElem = document.getElementById("greeting");
        if (greetingElem) {
            greetingElem.textContent = text;
        }
    }
    // Call the function with a custom greeting
    updateGreeting("Welcome to the site!");
});
