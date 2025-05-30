// Function that returns a Promise to check username availability
function isUsernameAvailable(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name.toLowerCase() === "admin") {
        reject("Name taken");
      } else {
        resolve(true);
      }
    }, 500); // simulate async delay
  });
}

// Async function to check availability using await and try...catch
async function checkAvailability(name) {
  try {
    await isUsernameAvailable(name);
    console.log("Available");
  } catch (error) {
    console.log("Error:", error);
  }
}

// Example usage:
checkAvailability("user123");  // logs "Available"
checkAvailability("Admin");    // logs "Error: Name taken"
