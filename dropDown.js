document.addEventListener("DOMContentLoaded", function () {
    var countrySelect = document.getElementById("countrySelect");
    var selectedCountry = document.getElementById("selectedCountry");
    countrySelect.addEventListener("change", function () {
        var selectedValue = countrySelect.value;
        if (selectedValue) {
            selectedCountry.textContent = selectedValue;
        }
        else {
            selectedCountry.textContent = "None";
        }
    });
});
