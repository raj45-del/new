document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");
    var box = document.getElementById("box");
    var button = document.getElementById("toggleBtn");
    button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
        console.log("Button clicked");
        box === null || box === void 0 ? void 0 : box.classList.toggle("active");
    });
});
