var _a, _b;
function openModal() {
    var modal = document.getElementById("myModal");
    if (modal) {
        modal.style.display = "block";
    }
}
function closeModal() {
    var modal = document.getElementById("myModal");
    if (modal) {
        modal.style.display = "none";
    }
}
(_a = document.getElementById("openModalBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", openModal);
(_b = document.getElementById("closeModalBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", closeModal);
