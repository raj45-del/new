function openModal(): void {
  const modal = document.getElementById("myModal");
  if (modal) {
    modal.style.display = "block";
  }
}

function closeModal(): void {
  const modal = document.getElementById("myModal");
  if (modal) {
    modal.style.display = "none";
  }
}

document.getElementById("openModalBtn")?.addEventListener("click", openModal);
document.getElementById("closeModalBtn")?.addEventListener("click", closeModal);
