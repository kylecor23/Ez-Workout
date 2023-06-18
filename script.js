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

// hooking up weight input and calculating ratio

inputWeight.addEventListener('change', (e) =>{
    const weightSelected = e.target.value

    const minPercent = 65
    const maxPercent = 100
    const randomPercent = Math.floor(Math.random()*(((maxPercent - minPercent) / 5) + 1)) * 5 + minPercent;
    var weightResult = Math.floor(weightSelected * (randomPercent / 100));
    //console.log(weightResult);

    const minWeight = Number(weightSelected * .50)
    for (
        let weightFinal = weightResult;
        weightFinal >= minWeight;
        weightFinal -= weightSelected * 0.1) {
        console.log(weightFinal);
        };
   
    });



// submit button to generate results 
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



