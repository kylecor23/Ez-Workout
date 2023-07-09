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
      };

      
      const reps ={
        numberReps: {
            65: '12',
            70: '10',
            75: '8',
            80: '6',
            85: '5',
            90: '3',
            95: '2',
            100: '1'
                }
    };
// used to take top weight of the day and assine a rep based of % to be liffted
    function exercisesReps(randomPercent){
        const displayReps = reps.numberReps[randomPercent];

        const exercisesReps =document.createElement('p');
        exercisesReps.textContent = "4 x " + displayReps;
        result.appendChild(exercisesReps);
    };

// take the ammount of jumps tell weight results is hit and creats the amount of warm-up sets that needed to be printed. 
    function warmUpReps(jumps){
        const displayWarmUp = jumps;
        for (let i = 0; i < jumps; i++) {
        const warmUpReps = document.createElement('p');
        warmUpReps.textContent = "1 x 5";
        result.appendChild(warmUpReps);
        };
    };
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
// randomly generates a top percentage based on inputed max weight to give top weight for workout session 
    const randomPercent = Math.floor(Math.random() * (((maxPercent - minPercent) / 5) + 1)) * 5 + minPercent;
    const weightResult = Math.floor(weightSelected * (randomPercent / 100));
   //generating random workout max % to be lifted and warm-up weight 
    const minWeight = Number(weightSelected * 0.5);
// caculates how many jumps it takes for weight results to be hit 
    const jumps = Math.ceil((weightResult - minWeight) / (weightSelected * 0.1));
    
    for (
        let weightFinal = minWeight; 
        weightFinal <= weightResult; 
        weightFinal += weightSelected * 0.1){
        const weightDisplay = document.createElement('p');
        weightDisplay.textContent = weightFinal;
        result.appendChild(weightDisplay);
        };

        warmUpReps(jumps);
        exercisesReps(randomPercent);
    
        
}); 
