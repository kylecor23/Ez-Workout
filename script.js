
const workouts = {
    strength: ["Chest", "Back", "Legs"],
    cardio: ["HIIT", "TABATA"]
  };



const workoutSelection = document.querySelector('#inputPrime');
const subSelection = document.querySelector('#inputSub');
const formInput = document.querySelector('#formInput');
const button = document.querySelector('.button');
const result = document.querySelector('#results');
const inputWeight = document.querySelector('#inputWeight')
 

function handleSubmit(e) {
    e.preventDefault();
    alert("Handle submit")
}

// target change in sub cat by option selected in main 

  // add to event lessoner primary 
  /*if (subSelection.value.toUpperCase() === 'HIIT') {
    weightInputElement.remove();
}*/

workoutSelection.addEventListener('change',(e)=> {
    const primaryCategorySelected = e.target.value;
    const weightInputElement = document.querySelector('#inputWeight');
    console.log(workoutSelection.value);

    if (workoutSelection.value.toLowerCase() === 'cardio') {
        inputWeight.style.display = 'none';}
         else {
         inputWeight.style.display = 'block';
        }

});

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
// add to event lessoner to subSelection 
    const weightInputElement = document.querySelector("#inputWeight");        
}); 

const exercises = {
    strength: {
        chest: 'Bench Press',
        back: 'Deadlift',
        legs: 'Squat'
    },
    cardio: {
        hiit: 'HIIT'
    }
};
        
      
function displayExerciseSelected(workoutSelection, subSelection) {

    const selectedExercise = exercises[workoutSelection.value.toLowerCase()][subSelection.value.toLowerCase()];
    
    const workoutDisplay = document.createElement('p');
    workoutDisplay.textContent = selectedExercise;
    result.appendChild(workoutDisplay);
};

function toNumberDivisibleBy5(decimalNumber) {
    const numberRounded = Math.round(decimalNumber * 100);
    const divisibleBy5 = (Math.round(numberRounded / 5) * 5) / 100;

    return divisibleBy5;
};

const weightPercentToReps = {
    0.65: ['3', '12'],
    0.70: ['3', '10'],
    0.75: ['3', '8'],
    0.80: ['2', '6'],
    0.85: ['2', '5'],
    0.90: ['1', '3'],
    0.95: ['1', '2'],
    1: ['1', '1'] 
}

const exerciseAccessories = {
    chestExercise: ["Incline press", "Machine press", "Chest Fly", "Chest Dip", "Decline Press", "Floor Press"],
    armExercise: ["Hammer Curl","Bicep Curl","Zottman Curls","Ez Bar Curl","Dual Rope Pushdown","Tricep Overhead Extension","Single Handle Push Down","Skull Crushers"],
    shoulderExercise:["Overhead Press","Face Pulls","Delt Fly","Lateral Raise","Y Raise","Push Press","Front Raise"],
    backExercise:["Single Arm Row","Lat Pulldown","Staight Arm Pulldown", "Shrugs", "Farmer Walks","Rack Pull","Pull Up","Barbell Row","Yoke Walk"],
    legExercise:["Lunge","Step-Ups","Bulgarian Split Squat","Leg Extention","Sled Push","Leg Press","Hamstring Curl","Seated Calf Raise","Standing Calf Raise","Romanian Deadlift","Nordic Hamstring Curl"],
    coreExtercise:["Dead Bug","Sit-up","Leg Raise","Ab Wheel","Cable Crunch","Hanging Leg Raise","Side Plank","Front Plank","Stir the Pot","Russian Twists"],
    cardioExercise:["Slam Ball","Jumping Jacks","Burpee","Jump Squat","Digs","Suicide Sprints","Sled Sprint","High Knees","Bum Kicks"," Kettle Bell Swing","Plank Jacks","Flutter Kicks","Box Jumps"],

}
const accessoriesCategory = {
    'chest' : ['chestExercise' , 'armExercise'],
    'back' : ['shoulderExercise' , 'backExercise'],
    'legs' : ['legExercise' , 'coreExtercise'],
};

    

function hiitAccessories(hiitExercise){

}

function generateAccessoryWorkout(exerciseAccessories) {
    const subCategorySelected = subSelection.value.toLowerCase();
    let randomCategory;
    let accessoryWorkoutCount = 1;
    const selectedExercises = []; 
  
    while (accessoryWorkoutCount <= 3) {
      const categoryOptions = accessoriesCategory[subCategorySelected];
      randomCategory = categoryOptions[Math.floor(Math.random() * categoryOptions.length)];
      const randomExercise = exerciseAccessories[randomCategory][Math.floor(Math.random() * exerciseAccessories[randomCategory].length)];
        

      if (selectedExercises.includes(randomExercise)) {
        continue;
     }
  
      selectedExercises.push(randomExercise); 
      accessoryWorkoutCount++;
    }
      
      
      selectedExercises.forEach(exercise => {
        const accessories = document.createElement('p');
        accessories.textContent = `4x12: ${exercise}`;
        result.appendChild(accessories);
      });
    
  }; 

  function handeStrenghtWorkout() {
    const weightSelected = inputWeight.value;

    const minPercentOfWeight = 0.65;
    const maxPercentOfWeight = 0.85;
    
    // Gives a decimal between 0.65 and 0.85
    const randomPercentage = (Math.random() * (maxPercentOfWeight - minPercentOfWeight)) + minPercentOfWeight;
    // Generates a decimal number (as a percentage) whose hundredth number is 0 or 5
    const startPercentage = toNumberDivisibleBy5(randomPercentage);

    
    let setCount = 0;

    while (setCount <= 3) { // the max number of sets, at which the iteration will stop. 
        
        const percentAdded = setCount * 0.05; // percent is incremented by 0.05.
        const setPercent = toNumberDivisibleBy5(startPercentage + percentAdded);
        const setWeight = Math.round((setPercent * weightSelected) / 2.5) * 2.5;

        const weightDisplay = document.createElement('p');
    
        const [sets, reps] = weightPercentToReps[setPercent];
        
        const isLastSet = setCount === 3

        weightDisplay.textContent = isLastSet ? `1 x 4: ${setWeight}lbs` : `${sets} x ${reps}: ${setWeight}lbs`;
        result.appendChild(weightDisplay);

        setCount++; 
    }   
    generateAccessoryWorkout(exerciseAccessories);
  }

formInput.addEventListener('submit', function (event) {
    event.preventDefault();
    result.innerHTML = '';
    
    const bodyElement = document.querySelector('body');
    bodyElement.classList.add('newStyle');


    displayExerciseSelected(workoutSelection, subSelection)
    
    if (workoutSelection.value.toLowerCase() === 'strength' ) {
    handeStrenghtWorkout();
    }
    
});