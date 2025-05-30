// Function that logs user info
function printUser(user) {
    console.log("ID: ".concat(user.id));
    console.log("Name: ".concat(user.name));
    console.log("Active: ".concat(user.isActive ? "Yes" : "No"));
}
// Sample user object
var sampleUser = {
    id: 101,
    name: "Omjee Kumar",
    isActive: true
};
// Call the function with the sample object
printUser(sampleUser);
