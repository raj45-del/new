// Helper function to return a Promise that resolves after ms milliseconds
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function that logs time, waits, then logs time again
async function logTime() {
  console.log("Start time:", new Date().toLocaleTimeString());
  await wait(2000);
  console.log("End time:", new Date().toLocaleTimeString());
}

// Run the function
logTime();
