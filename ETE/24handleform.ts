function handleFormSubmit(event: Event): void {
  event.preventDefault(); // Prevent page reload

  const nameInput = document.getElementById("name") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;

  const name = nameInput.value;
  const email = emailInput.value;

  console.log("Name:", name);
  console.log("Email:", email);
}

const userForm = document.getElementById("userForm");
userForm?.addEventListener("submit", handleFormSubmit);
