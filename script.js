const workouts = {
    strength: ["Chest", "Back", "Legs"],
    cardio: ["HIIT"]
  };



const workoutSelection = document.querySelector('#inputPrime');
const subSelection = document.querySelector('#inputSub');
const formInput = document.querySelector('#formInput');
const button = document.querySelector('.button');
const result = document.querySelector('#results');
const inputWeight = document.querySelector('#inputWeight')
 


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



button.addEventListener('click', function (event) {
    event.preventDefault();
    result.innerHTML = '';

    if (workoutSelection.value.toLowerCase() === 'strength' && subSelection.value.toLowerCase() === 'chest') {
        const wr = document.createElement('p');
        wr.textContent = "bench press";
        result.appendChild(wr);
    } else if (workoutSelection.value.toLowerCase() === 'strength' && subSelection.value.toLowerCase() === 'back') {
        const wr = document.createElement('p');
        wr.textContent = "deadlift";
        result.appendChild(wr);
    } else if (workoutSelection.value.toLowerCase() === 'strength' && subSelection.value.toLowerCase() === 'legs') {
        const wr = document.createElement('p');
        wr.textContent = "squat";
        result.appendChild(wr);
    }
}); 

