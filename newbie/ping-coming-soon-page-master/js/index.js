const form = document.querySelector(".card__form");

const emailInput = document.querySelector(".form__input");

const emailValidation = document.querySelector(".validation__email");

const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", (event) => {
	event.preventDefault();

	if (emailInput.value === "") {
		emailValidation.textContent = "This field is required";
	} else if (!email.test(emailInput.value)) {
		emailValidation.textContent = "Please enter a valid email address";
	} else {
		form.reset();
		emailValidation.textContent = "";
	}
});
