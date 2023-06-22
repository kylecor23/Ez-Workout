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
 

// target change in sub cat by option selected in main 

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

    const exercises = {
        strength: {
            chest: 'Bench Press',
            back: 'Deadlift',
            legs: 'Squat'
        }
    };
        
      
    function workoutDisplay(workoutSelection, subSelection) {
        const selectedExercise = exercises[workoutSelection.value.toLowerCase()][subSelection.value.toLowerCase()];
      
        const workoutDisplay = document.createElement('p');
        workoutDisplay.textContent = selectedExercise;
        result.appendChild(workoutDisplay);
      }




// hooking up weight input 

inputWeight.addEventListener('change', (e) =>{
    const weightSelected = e.target.value;
    weightSelected.innerHTML = '';
});



// submit button to generate results 
button.addEventListener('click', function (event) {
    event.preventDefault();
    result.innerHTML = '';

    workoutDisplay(workoutSelection, subSelection);
    

    const weightSelected = inputWeight.value;
    const minPercent = 65;
    const maxPercent = 100;
    const randomPercent = Math.floor(Math.random() * (((maxPercent - minPercent) / 5) + 1)) * 5 + minPercent;
    const weightResult = Math.floor(weightSelected * (randomPercent / 100));
   //generating random workout max % to be lifted and warm-up weight 
    const minWeight = Number(weightSelected * 0.5);
    for (
        let weightFinal = minWeight; 
        weightFinal <= weightResult; 
        weightFinal += weightSelected * 0.1){
        const weightDisplay = document.createElement('p');
        weightDisplay.textContent = weightFinal;
        result.appendChild(weightDisplay);
        };
    
    /* note: pull randomPercent to get the percentage generated for maxWeight (to be lifted) use same 0.1 decrease to generate percentages that are for warm up weight. From these values might beable to use if and else if to assine reps to percentages ie. if percentage is 75% reps = 10. You can then display reps next to weightDisplayed  */
        
});