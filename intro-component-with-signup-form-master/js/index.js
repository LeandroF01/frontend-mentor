const form = document.querySelector("form");

//Inputs
const firstNameInput = document.querySelector(".form__first-name");
const lastNameInput = document.querySelector(".form__last-name");
const emailInput = document.querySelector(".form__first-email");
const passwordInput = document.querySelector(".form__first-password");

//Messages validation
const firstNameValidation = document.querySelector(".validation__first-name");
const lastNameValidation = document.querySelector(".validation__last-name");
const emailValidation = document.querySelector(".validation__email");
const passwordValidation = document.querySelector(".validation__password");

//Validations
const name = /^[a-zA-Z\s]+$/;
const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", (event) => {
	event.preventDefault();

	if (firstNameInput.value === "") {
		firstNameValidation.textContent = "This field is required";
	} else if (!name.test(firstNameInput.value)) {
		firstNameValidation.textContent = "Please enter a valid first name";
	} else {
		firstNameValidation.classList.add("good");
		firstNameValidation.textContent = "Good Look";
	}

	if (lastNameInput.value === "") {
		lastNameValidation.textContent = "This field is required";
	} else if (!name.test(lastNameInput.value)) {
		lastNameValidation.textContent = "Please enter a valid last name";
	} else {
		lastNameValidation.classList.add("good");
		lastNameValidation.textContent = "Good Look";
	}

	if (emailInput.value === "") {
		emailValidation.textContent = "This field is required";
	} else if (!email.test(emailInput.value)) {
		emailValidation.textContent = "Please enter a valid email address";
	} else {
		emailValidation.classList.add("good");
		emailValidation.textContent = "Good Look";
	}

	if (passwordInput.value === "") {
		passwordValidation.textContent = "This field is required";
	} else if (!password.test(passwordInput.value)) {
		passwordValidation.textContent = "Please enter a valid password";
	} else {
		passwordValidation.classList.add("good");
		passwordValidation.textContent = "Good Look";
	}

	const errors = document.querySelectorAll(".good");
	const vali = document.querySelectorAll(".validation");

	if (errors.length === 4) {
		firstNameValidation.classList.remove("good");
		firstNameValidation.textContent = "";
		lastNameValidation.classList.remove("good");
		lastNameValidation.textContent = "";
		emailValidation.classList.remove("good");
		emailValidation.textContent = "";
		passwordValidation.classList.remove("good");
		passwordValidation.textContent = "";

		form.reset();
	}
});
