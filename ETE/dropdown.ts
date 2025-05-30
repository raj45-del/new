document.addEventListener("DOMContentLoaded", () => {
  const countrySelect = document.getElementById("countrySelect") as HTMLSelectElement;
  const selectedCountry = document.getElementById("selectedCountry") as HTMLParagraphElement;

  countrySelect.addEventListener("change", () => {
    const selectedValue = countrySelect.value;
    selectedCountry.textContent = `You selected: ${selectedValue}`;
  });
});
