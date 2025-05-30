document.addEventListener("DOMContentLoaded", function () {
    var ageInput = document.getElementById("ageInput");
    var errorMsg = document.getElementById("errorMsg");
    ageInput.addEventListener("input", function () {
        var value = ageInput.value;
        var isNumeric = /^\d+$/.test(value);
        if (!isNumeric) {
            errorMsg.textContent = "Enter digits only";
            return;
        }
        var age = Number(value);
        if (age >= 18 && age <= 40) {
            errorMsg.textContent = "";
        }
        else {
            errorMsg.textContent = "Age must be between 18 to 40 ";
        }
    });
});
