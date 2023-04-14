const form = document.querySelector(".form");
const inputForm = document.querySelector(".form__input");
const validation = document.querySelector(".input__icon");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const validate = emailRegex.test(inputForm.value);

	if (validate) {
		inputForm.value = "";
		validation.classList.remove("active");
	} else {
		validation.classList.add("active");
	}
});
