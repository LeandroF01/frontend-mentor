function handleClick() {
  const selectButton: HTMLInputElement =
    document.querySelector(".share-button");
  const openModal: HTMLInputElement = document.querySelector(".modal-close");

  selectButton.addEventListener("click", () => {
    if (openModal.classList.contains("modal-open")) {
      openModal.classList.remove("modal-open");
    } else {
      openModal.classList.add("modal-open");
    }
  });
}
handleClick();
