function handleFormSubmit(event) {
    event.preventDefault(); // Prevent page reload
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var name = nameInput.value;
    var email = emailInput.value;
    console.log("Name:", name);
    console.log("Email:", email);
}
var userForm = document.getElementById("userForm");
userForm === null || userForm === void 0 ? void 0 : userForm.addEventListener("submit", handleFormSubmit);
