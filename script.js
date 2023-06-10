var workouts = {
    strength: ["Chest", "Back", "Legs"],
    cardio: ["HIIT"]
  };

const workoutSelection = document.querySelector('#inputPrime')
const subSelection = document.querySelector('#inputSub');

workoutSelection.addEventListener('change', (e) => {
    const categorySelected = e.target.value;
    subSelection.innerHTML = '';


const subCategorySelection = workouts[categorySelected]

for (let i=0; i < subCategorySelection.length; i++) {
    const style = subCategorySelection[i];
    const option = document.createElement('option')
    option.textContent = style;
    option.value = style;
    subSelection.appendChild(option);
}
});