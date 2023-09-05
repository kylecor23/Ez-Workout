const workouts = {
	strength: ["Chest", "Back", "Legs"],
	cardio: ["HIIT"],
};

const workoutSelection = document.querySelector("#inputPrime");
const subSelection = document.querySelector("#inputSub");
const formInput = document.querySelector("#formInput");
const button = document.querySelector(".button");
const result = document.querySelector("#results");
const inputWeight = document.querySelector("#inputWeight");

function handleSubmit(e) {
	e.preventDefault();
	alert("Handle submit");
}

workoutSelection.addEventListener("change", (e) => {
	const primaryCategorySelected = e.target.value;

	if (primaryCategorySelected.toLowerCase() === "cardio") {
		document.querySelector("#inputWeightDiv").style.display = "none";
	} else {
		document.querySelector("#inputWeightDiv").style.display = "block";
	}
});

workoutSelection.addEventListener("change", (e) => {
	const categorySelected = e.target.value;
	subSelection.innerHTML = "";

	const subCategorySelection = workouts[categorySelected];

	for (let i = 0; i < subCategorySelection.length; i++) {
		const style = subCategorySelection[i];
		const option = document.createElement("option");
		option.textContent = style;
		option.value = style;
		subSelection.appendChild(option);
	}
});

const exercises = {
	strength: {
		chest: "Bench Press",
		back: "Deadlift",
		legs: "Squat",
	},
	cardio: {
		hiit: "HIIT",
	},
};

function displayExerciseSelected(workoutSelection, subSelection) {
	const selectedExercise =
		exercises[workoutSelection.value.toLowerCase()][
			subSelection.value.toLowerCase()
		];

	const workoutDisplay = document.createElement("p");
	workoutDisplay.textContent = selectedExercise;
	workoutDisplay.classList.add("mainWorkoutSelected");
	result.appendChild(workoutDisplay);
}

function toNumberDivisibleBy5(decimalNumber) {
	const numberRounded = Math.round(decimalNumber * 100);
	const divisibleBy5 = (Math.round(numberRounded / 5) * 5) / 100;

	return divisibleBy5;
}

const weightPercentToReps = {
	0.65: ["3", "12"],
	0.7: ["3", "10"],
	0.75: ["3", "8"],
	0.8: ["2", "6"],
	0.85: ["2", "5"],
	0.9: ["1", "3"],
	0.95: ["1", "2"],
	1: ["1", "1"],
};

const exerciseAccessories = {
	chestExercise: [
		"Incline press",
		"Machine press",
		"Chest Fly",
		"Chest Dip",
		"Decline Press",
		"Floor Press",
	],
	armExercise: [
		"Hammer Curl",
		"Bicep Curl",
		"Zottman Curls",
		"Ez Bar Curl",
		"Dual Rope Pushdown",
		"Tricep Overhead Extension",
		"Single Handle Push Down",
		"Skull Crushers",
	],
	shoulderExercise: [
		"Overhead Press",
		"Face Pulls",
		"Delt Fly",
		"Lateral Raise",
		"Y Raise",
		"Push Press",
		"Front Raise",
	],
	backExercise: [
		"Single Arm Row",
		"Lat Pulldown",
		"Staight Arm Pulldown",
		"Shrugs",
		"Farmer Walks",
		"Rack Pull",
		"Pull Up",
		"Barbell Row",
		"Yoke Walk",
	],
	legExercise: [
		"Lunge",
		"Step-Ups",
		"Bulgarian Split Squat",
		"Leg Extention",
		"Sled Push",
		"Leg Press",
		"Hamstring Curl",
		"Seated Calf Raise",
		"Standing Calf Raise",
		"Romanian Deadlift",
		"Nordic Hamstring Curl",
	],
	coreExtercise: [
		"Dead Bug",
		"Sit-up",
		"Leg Raise",
		"Ab Wheel",
		"Cable Crunch",
		"Hanging Leg Raise",
		"Side Plank",
		"Front Plank",
		"Stir the Pot",
		"Russian Twists",
	],
	cardioExercise: [
		"Slam Ball",
		"Jumping Jacks",
		"Burpee",
		"Jump Squat",
		"Digs",
		"Suicide Sprints",
		"Sled Sprint",
		"High Knees",
		"Bum Kicks",
		" Kettle Bell Swing",
		"Plank Jacks",
		"Flutter Kicks",
		"Box Jumps",
	],
};
const accessoriesCategory = {
	chest: ["chestExercise", "armExercise"],
	back: ["shoulderExercise", "backExercise"],
	legs: ["legExercise", "coreExtercise"],
	hiit: ["cardioExercise"],
};

function generateTableRow(parentElement, cellsData) {
	const row = document.createElement("tr");
	row.classList.add("rowClass");
	parentElement.appendChild(row);

	cellsData.forEach((cellText) => {
		const cell = document.createElement("td");
		cell.classList.add("tableCell");
		cell.textContent = cellText;
		row.appendChild(cell);
	});
}

function generateStrengthAccessoryWorkout(exerciseAccessories) {
	const subCategorySelected = subSelection.value.toLowerCase();
	let randomCategory;
	let accessoryWorkoutCount = 1;
	const selectedExercises = [];

	while (accessoryWorkoutCount <= 3) {
		const categoryOptions = accessoriesCategory[subCategorySelected];
		randomCategory =
			categoryOptions[Math.floor(Math.random() * categoryOptions.length)];
		const randomExercise =
			exerciseAccessories[randomCategory][
				Math.floor(Math.random() * exerciseAccessories[randomCategory].length)
			];

		if (!selectedExercises.includes(randomExercise)) {
			selectedExercises.push(randomExercise);
			accessoryWorkoutCount++;
		}
	}

	const accessoriesLabel = document.createElement("p");
	accessoriesLabel.textContent = "Accessories";
	accessoriesLabel.classList.add("accessoriesLabel");
	result.appendChild(accessoriesLabel);

	const accessoriesTable = document.createElement("table");
	accessoriesTable.classList.add("strengthTable");
	result.appendChild(accessoriesTable);

	generateTableRow(accessoriesTable, ["Exercise", "Sets", "Reps"]);

	selectedExercises.forEach((exercise) => {
		generateTableRow(accessoriesTable, [exercise, "4", "12"]);
	});
}

function generateHiitAccessoryWorkout() {
	const selectedExercises = [];
	let accessoryWorkoutCount = 0;

	while (accessoryWorkoutCount < 10) {
		if (accessoryWorkoutCount % 2 === 0) {
			const hiitAccessories = exerciseAccessories["cardioExercise"];
			const randomHiitAccessories =
				hiitAccessories[Math.floor(Math.random() * hiitAccessories.length)];

			if (!selectedExercises.includes(randomHiitAccessories)) {
				selectedExercises.push(randomHiitAccessories);
				accessoryWorkoutCount++;
			}
		} else {
			const hiitAccessories = [
				exerciseAccessories["backExercise"],
				exerciseAccessories["chestExercise"],
				exerciseAccessories["legExercise"],
				exerciseAccessories["coreExtercise"],
			]; //[accessoryWorkoutCount % 4]; //cycle through array

			const randomCategory =
				hiitAccessories[Math.floor(Math.random() * hiitAccessories.length)];
			const randomHiitAccessories =
				randomCategory[Math.floor(Math.random() * randomCategory.length)];

			if (!selectedExercises.includes(randomHiitAccessories)) {
				selectedExercises.push(randomHiitAccessories);
				accessoryWorkoutCount++;
			}
		}
	}

	selectedExercises.forEach((exercise) => {
		const accessories = document.createElement("p");
		accessories.textContent = exercise;
		result.appendChild(accessories);
	});
}

function handeStrenghtWorkout() {
	const weightSelected = inputWeight.value;

	const minPercentOfWeight = 0.65;
	const maxPercentOfWeight = 0.85;

	// Gives a decimal between 0.65 and 0.85
	const randomPercentage =
		Math.random() * (maxPercentOfWeight - minPercentOfWeight) +
		minPercentOfWeight;
	// Generates a decimal number (as a percentage) whose hundredth number is 0 or 5
	const startPercentage = toNumberDivisibleBy5(randomPercentage);

	let setCount = 0;

	const strengthTable = document.createElement("table");
	strengthTable.classList.add("strengthTable");
	result.appendChild(strengthTable);

	// Create table header
	generateTableRow(strengthTable, ["Weight", "Sets", "Reps"]);

	while (setCount <= 3) {
		// the max number of sets, at which the iteration will stop.

		const percentAdded = setCount * 0.05; // percent is incremented by 0.05.
		const setPercent = toNumberDivisibleBy5(startPercentage + percentAdded);
		const setWeight = Math.round((setPercent * weightSelected) / 2.5) * 2.5;

		const [sets, reps] = weightPercentToReps[setPercent];

		const isLastSet = setCount === 3;

		generateTableRow(strengthTable, [`${setWeight} lbs`, sets, reps]);

		setCount++;
	}
	generateStrengthAccessoryWorkout(exerciseAccessories);
}

function handleCardioWorkout() {
	generateHiitAccessoryWorkout();
}
//test
const workDurationInput = document.getElementById("workDuration");
const restDurationInput = document.getElementById("restDuration");
const roundsInput = document.getElementById("rounds");
const startTimerButton = document.getElementById("startIntervalTimerButton");
const showTimerInputsButton = document.getElementById("showTimerInputsButton");
const timerText = document.getElementById("timerText");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

// Initially hide the timer inputs and timer display
document.getElementById("popupContent").style.display = "none";
document.getElementById("timerDisplay").style.display = "none";

// Add a click event listener to show the timer inputs

showTimerInputsButton.addEventListener("click", function () {
	document.getElementById("popupContent").style.display = "block";
	document.getElementById("showTimerInputsButton").style.display = "none";
});

let currentInterval = "work";
let rounds = 1;
let currentRound = 1;
let isPaused = false;
let timerInterval;

let roundStartSound = document.getElementById("roundStartSound");
let timerCompleteSound = document.getElementById("timerCompleteSound");

function startIntervalTimer() {
	const workDuration = parseInt(workDurationInput.value, 10);
	const restDuration = parseInt(restDurationInput.value, 10);
	const rounds = parseInt(roundsInput.value, 10);

	/*if (
		isNaN(workDuration) ||
		isNaN(restDuration) ||
		isNaN(rounds) ||
		workDuration <= 0 ||
		restDuration <= 0 ||
		rounds <= 0
	) {
		alert("Please enter valid durations and rounds (greater than 0).");
		return;
	}*/

	// Hide the input fields and display the timer
	document.getElementById("popupContent").style.display = "none";
	document.getElementById("timerDisplay").style.display = "block";

	let remainingTime = currentInterval === "work" ? workDuration : restDuration;

	function updateTimerDisplay() {
		if (isPaused) return;

		timerText.textContent = `${currentRound} / ${rounds} (${currentInterval.toUpperCase()}) - ${remainingTime}`;
		timerText.style.color = currentInterval === "work" ? "green" : "blue";

		if (remainingTime <= 0) {
			if (currentInterval === "work") {
				currentInterval = "rest";
				remainingTime = restDuration;
				roundStartSound.play(); // Play sound at the beginning of a rest period
			} else {
				currentInterval = "work";
				remainingTime = workDuration;
				if (currentRound >= rounds) {
					clearInterval(timerInterval);
					timerText.textContent = "Completed!";
					timerCompleteSound.play(); // Play sound when the timer completes
					pauseButton.disabled = true;
				} else {
					currentRound++;
					roundStartSound.play(); // Play sound at the beginning of a new round
				}
			}
		} else {
			remainingTime--;
		}
	}

	updateTimerDisplay();
	timerInterval = setInterval(updateTimerDisplay, 1000);
	pauseButton.disabled = false;
}

function pauseTimer() {
	if (isPaused) {
		pauseButton.textContent = "Pause";
		isPaused = false;
	} else {
		pauseButton.textContent = "Resume";
		isPaused = true;
	}
}

function resetTimer() {
	clearInterval(timerInterval);
	isPaused = false;
	currentRound = 1;
	pauseButton.disabled = true;
	document.getElementById("popupContent").style.display = "block";
	document.getElementById("timerDisplay").style.display = "none";
	workDurationInput.value = "";
	restDurationInput.value = "";
	roundsInput.value = "1";
	timerText.textContent = "";
}

// Add click event listeners
startTimerButton.addEventListener("click", startIntervalTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

//test
formInput.addEventListener("submit", function (event) {
	event.preventDefault();
	result.innerHTML = "";

	const bodyElement = document.querySelector("body");
	bodyElement.classList.add("newStyle");

	displayExerciseSelected(workoutSelection, subSelection);

	if (workoutSelection.value.toLowerCase() === "strength") {
		handeStrenghtWorkout();
	}

	if (workoutSelection.value.toLowerCase() === "cardio") {
		const instruction = document.createElement("p");
		instruction.textContent =
			"Complete each exercise for 45s with a 15s rest before moving on to the next exercise. Once through the list, take a 1-minute rest. rinse & repeat for a total of 3 times to finish your workout.";
		result.appendChild(instruction);
		handleCardioWorkout();
	}
});
