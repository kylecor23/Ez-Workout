
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
 

function handleSubmit(e) {
    e.preventDefault();
    alert("Handle submit")
}

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

function toNumberDivisibleBy5(decimalNumber) {
    const numberRounded = Math.round(decimalNumber * 100);
    const divisibleBy5 = (Math.round(numberRounded / 5) * 5) / 100;

    return divisibleBy5;
}

const weightPercentToReps = {
    0.65: ['3', '12'],
    0.70: ['3', '10'],
    0.75: ['4', '8'],
    0.80: ['5', '6'],
    0.85: ['5', '5'],
    0.90: ['3', '3'],
    0.95: ['2', '2'],
    1: ['1', '1'] // Will likely be for the last set
}

const exerciseAccessories = {
    chestExercise: ["Incline press", "Machine press", "Chest fly", "Chest dip", "Decline Press", "Floor press"],
    armExercise: ["Hammer Curl","Bicep Curl","Zottman Curls","Ez bar curl","Dual Rope Pushdown","Tricep Overhead Extension","Single Handle Push Down","Skull Crushers"],
    shoulderExercise:["Overhead Press","Face Pulls","Delt Fly","Lateral Raise","Y Raise","Push Press","Front Raise"],
    backExercise:["Single Arm Row","Lat Pulldown","Staight Arm Pulldown", "Shrugs", "Fammer Walks","Rack Pull","Pull Up","Barbell Row","Yoke walk"],
    legExercise:["lunge","Step-Ups","Bulgarian Split Squat","Leg Extention","Sled Push","Leg Press","Hamstring Curl","Seated Calf Raise","Standing Calf Raise","Romanian Deadlift","Nordic Hamstring Curl"],
    coreExtercise:["Dead Bug","Sit-up","Leg raise","Abb Wheel","Cable Crunch","Hanging leg Raise","Side Plank","Front Plank","Stir the Pot","Russian Twists"],
    cardioExercise:["Slam Ball","Jumping Jacks","Burpee","Jump Squat","Digs","Suacide Sprints","Sled Sprint","High Knees","Bum Kicks"," Kettle Bell Swing","Plank Jacks","Flutter Kicks","Box Jumps"],

}
const accessoriesCategory = {
    'chest' : ['chestExercise' , 'armExercise'],
    'back' : ['shoulderExercise' , 'backExercise'],
    'legs' : ['legExercise' , 'coreExtercise'],
};

/*function accessories(exerciseAccessories) {
   
   const subCategorySelected = subSelection.value.toLowerCase();
   let randomCategory;
   let setTime = 0;

while (setTime <= 2 ) {
 
    const categoryOptions = accessoriesCategory[subCategorySelected];
    randomCategory = categoryOptions[Math.floor(Math.random() * categoryOptions.length)];
   
   const randomExercise = exerciseAccessories[randomCategory][Math.floor(Math.random() * exerciseAccessories[randomCategory].length)];
  
   const accessories = document.createElement('p');
   accessories.textContent = randomExercise;
   result.appendChild(accessories);

   setTime++;
   } };*/

   function accessories(exerciseAccessories) {
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
  
    
      const accessories = document.createElement('p');
      accessories.textContent = selectedExercises;
      result.appendChild(accessories);
    
  }

// submit button to generate results 
formInput.addEventListener('submit', function (event) {
    event.preventDefault();
    result.innerHTML = '';

    workoutDisplay(workoutSelection, subSelection)

    const weightSelected = inputWeight.value;

    const minPercentOfWeight = 0.65;
    const maxPercentOfWeight = 0.85;
    
    // Gives a decimal between 0.65 and 0.85
    const randomPercentage = (Math.random() * (maxPercentOfWeight - minPercentOfWeight)) + minPercentOfWeight;
    // Generates a decimal number (as a percentage) whose hundredth number is 0 or 5
    const startPercentage = toNumberDivisibleBy5(randomPercentage);

    // A counter for the number sets
    let setCount = 0;

    while (setCount <= 3) { // the max number of sets, at which the iteration will stop. There's be 4 iterations (or sets) since the counter starts at 0 and ends at 3.
        const percentAdded = setCount * 0.05; // percent is incremented by 0.05.
        const setPercent = toNumberDivisibleBy5(startPercentage + percentAdded);
        const setWeight = Math.round((setPercent * weightSelected) / 2.5) * 2.5;

        const weightDisplay = document.createElement('p');
    
        const [sets, reps] = weightPercentToReps[setPercent];
        
        const isLastSet = setCount === 3

        weightDisplay.textContent = isLastSet ? `1 x 4: ${setWeight}lbs` : `${sets} x ${reps}: ${setWeight}lbs`;
        result.appendChild(weightDisplay);

        setCount++; // Very important to add to prevent an infinite loop and crash your browser!
    }   
    accessories(exerciseAccessories);
});