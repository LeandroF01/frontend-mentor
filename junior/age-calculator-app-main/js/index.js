const form = document.querySelector(".calculator__form");

//inputs
const inputDay = document.querySelector(".form__day");
const inputMonth = document.querySelector(".form__month");
const inputYear = document.querySelector(".form__year");

//validation
const validationDay = document.querySelector(".validation__day");
const validationMonth = document.querySelector(".validation__month");
const validationYear = document.querySelector(".validation__year");

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

// form.addEventListener("submit", (event) => {
// 	event.preventDefault();

// 	const day = inputDay.value;
// 	const month = inputMonth.value;
// 	const year = inputYear.value;
// 	console.log(day);

// 	// verificar si los campos están vacíos
// 	if (!day) {
// 		validationDay.textContent = "Required Field";
// 	} else {
// 		validationDay.textContent = "";
// 	}
// 	if (!month) {
// 		validationMonth.textContent = "Required Field";
// 	} else {
// 		validationMonth.textContent = "";
// 	}

// 	if (!year) {
// 		validationYear.textContent = "Required Field";
// 	} else {
// 		validationYear.textContent = "";
// 	}

// 	// verificar si el número de día está entre 1 y 31
// 	if (day < 1 || day > 31) {
// 		validationDay.textContent = "Must be between 1 and 31";
// 	} else {
// 		validationDay.textContent = "";
// 	}

// 	// verificar si el número del mes está entre 1 y 12
// 	if (month < 1 || month > 12) {
// 		monthsView.textContent = "The month number must be between 1 and 12";
// 	}

// 	const date = ageCalculator(year, month, day);

// 	yearsView.textContent = date.years;

// 	monthsView.textContent = date.months;

// 	daysView.textContent = date.days;
// });
