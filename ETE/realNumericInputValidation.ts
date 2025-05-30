document.addEventListener("DOMContentLoaded", () => {
  const ageInput = document.getElementById("ageInput") as HTMLInputElement;
  const errorMsg = document.getElementById("errorMsg") as HTMLDivElement;

  ageInput.addEventListener("input", () => {
    const value = ageInput.value;
    const isNumeric = /^\d*$/.test(value); // allows empty or numeric input

    if (!isNumeric) {
      errorMsg.textContent = "Please enter numbers only.";
    } else {
      errorMsg.textContent = "";
    }
  });
});
