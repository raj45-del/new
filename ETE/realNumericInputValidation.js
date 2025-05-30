document.addEventListener("DOMContentLoaded", function () {
    var ageInput = document.getElementById("ageInput");
    var errorMsg = document.getElementById("errorMsg");
    ageInput.addEventListener("input", function () {
        var value = ageInput.value;
        var isNumeric = /^\d*$/.test(value); // allows empty or numeric input
        if (!isNumeric) {
            errorMsg.textContent = "Please enter numbers only.";
        }
        else {
            errorMsg.textContent = "";
        }
    });
});
