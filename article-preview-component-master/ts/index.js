function handleClick() {
  const selectButton = document.querySelector(".share-button");
  const openModal = document.querySelector(".modal-close");
  selectButton.addEventListener("click", function () {
    if (openModal.classList.contains("modal-open")) {
      openModal.classList.remove("modal-open");
    } else {
      openModal.classList.add("modal-open");
    }
  });
}
handleClick();
