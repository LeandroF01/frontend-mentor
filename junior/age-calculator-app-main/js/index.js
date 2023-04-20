const form = document.querySelector(".calculator__form");

//inputs
const inputDay = document.querySelector(".form__day");
const inputMonth = document.querySelector(".form__month");
const inputYear = document.querySelector(".form__year");

//validation
const validationDay = document.querySelector(".validation__day");
const validationMonth = document.querySelector(".validation__month");
const validationYear = document.querySelector(".validation__year");

const errorDay = document.querySelector(".form__validation:nth-of-type(1)");
const errorMonth = document.querySelector(".form__validation:nth-of-type(2)");
const errorYear = document.querySelector(".form__validation:nth-of-type(3)");

//view
const yearsView = document.querySelector(".years");
const monthsView = document.querySelector(".months");
const daysView = document.querySelector(".days");

const ageCalculator = (year, month, day) => {
	//fecha actual
	const currentDate = new Date();
	const currentDay = currentDate.getTime();

	//fecha objetivo
	const objDate = new Date(`${year}-${month}-${day}`);
	const objDay = objDate.getTime();

	const differenceMilliseconds = currentDay - objDay;

	// calcular el número de años, meses y días a partir de la diferencia en milisegundos
	const years = Math.floor(differenceMilliseconds / 31557600000); // 1 año = 31536000000 milisegundos
	const months = Math.floor(
		(differenceMilliseconds % 31557600000) / 2629800000
	); // 1 mes = 2628000000 milisegundos
	const days = Math.floor(
		((differenceMilliseconds % 31557600000) % 2629800000) / 86400000
	);

	return { years, months, days };
};

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const day = inputDay.value;
	const month = inputMonth.value;
	const year = inputYear.value;

	// verificar si los campos están vacíos
	if (!day) {
		validationDay.textContent = "Required Field";
		errorDay.classList.add("error");
		return;
	} else {
		validationDay.textContent = "";
		errorDay.classList.remove("error");
	}

	if (!month) {
		validationMonth.textContent = "Required Field";
		errorMonth.classList.add("error");
		return;
	} else {
		validationMonth.textContent = "";
		errorMonth.classList.remove("error");
	}

	if (!year) {
		validationYear.textContent = "Required Field";
		errorYear.classList.add("error");
		return;
	} else {
		validationYear.textContent = "";
		errorYear.classList.remove("error");
	}

	// verificar si el número de día está entre 1 y 31
	if (day < 1 || day > 31) {
		validationDay.textContent = "Must be a valid day";
		errorDay.classList.add("error");
	} else {
		validationDay.textContent = "";
		errorDay.classList.remove("error");
	}

	// verificar si el número del mes está entre 1 y 12
	if (month < 1 || month > 12) {
		validationMonth.textContent = "Must be a valid month";
		errorMonth.classList.add("error");
	} else {
		validationMonth.textContent = "";
		errorMonth.classList.remove("error");
	}

	// verificar si el número year está sobre el actual
	if (year > new Date().getFullYear()) {
		validationYear.textContent = "Must be it the past";
		errorYear.classList.add("error");
	} else {
		validationYear.textContent = "";
		errorYear.classList.remove("error");
	}

	//verifica si el mes cuneta con esos dias
	const lastDayOfMonth = new Date(year, month, 0).getDate();

	if (day > lastDayOfMonth) {
		validationDay.textContent = `There are only ${lastDayOfMonth} days`;
		errorDay.classList.add("error");
	} else {
		validationDay.textContent = "";
		errorDay.classList.remove("error");
	}

	// si se cumplieron las condiciones --> retorna
	if (
		errorDay.classList.length < 2 &&
		errorMonth.classList.length < 2 &&
		errorYear.classList.length < 2
	) {
		const date = ageCalculator(year, month, day);

		yearsView.textContent = date.years;

		monthsView.textContent = date.months;

		daysView.textContent = date.days;
	}
});
