document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");

  const box = document.getElementById("box");
  const button = document.getElementById("toggleBtn");

  button?.addEventListener("click", () => {
    console.log("Button clicked");
    box?.classList.toggle("active");
  });
});
