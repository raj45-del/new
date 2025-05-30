// Define the User interface
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

// Function that logs user info
function printUser(user: User): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Active: ${user.isActive ? "Yes" : "No"}`);
}

// Sample user object
const sampleUser: User = {
  id: 101,
  name: "Omjee Kumar",
  isActive: true
};

// Call the function with the sample object
printUser(sampleUser);






