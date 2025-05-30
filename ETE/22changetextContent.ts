document.addEventListener("DOMContentLoaded", ()=>{
    function updateGreeting(text: string): void {
  const greetingElem = document.getElementById("greeting");
  if (greetingElem) {
    greetingElem.textContent = text;
  }
}

// Call the function with a custom greeting
updateGreeting("Welcome to the site!");
})

