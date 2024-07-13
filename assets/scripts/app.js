const inputDate = document.querySelector(".date-input");
const btn = document.querySelector(".btn");
const result = document.getElementById("result");
const error = document.querySelector(".err");

btn.addEventListener("click", () => {
	if (inputDate.value === "") {
		error.classList.remove("none");
		return;
	} else error.classList.add("none");

	const today = new Date();
	const birthday = new Date(inputDate.value);

	birthday.setFullYear(today.getFullYear());

	if (today > birthday) {
		birthday.setFullYear(today.getFullYear() + 1);
	}

	const daysLeft = Math.ceil((birthday - today) / (1000 * 60 * 60 * 24));

	const dayString = correctGrammar(daysLeft);
	result.textContent = `До вашего дня рождения осталось ${daysLeft} ${dayString}.`;
});

function correctGrammar(num) {
	if (num % 10 == 1 && num % 100 != 11) {
		return "день";
	} else if (
		[2, 3, 4].includes(num % 10) &&
		![12, 13, 14].includes(num % 100)
	) {
		return "дня";
	} else {
		return "дней";
	}
}
