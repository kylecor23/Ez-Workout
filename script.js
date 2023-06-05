
/*const t2 = document.createElement ('select')
t2.innerHTML = "<option>22</option>"
document.body.appendChild(t2)




let select = document.querySelector('#inputPrime');
let result = document.querySelector('#test');
     select.addEventListener('change', function () {
        result.textContent = t2;
        });*/

/*
var workouts = {
    'cardio':['HIIT'],
    'Strength':['Chest','Back','Legs']
},

Prime = document.getElementById('#inputPrime')
Sub = document.getElementById('#inputSub');

setOptions(Prime, Object.keys(inputPrime));

setOptions(Sub, Prime[Prime_select.value]);

Prime.addEventListener('change', function() {
    setOptions(Sub, Prime[Prime_select.value])
});

function setOptions(dropDown, option) {
    dropDown.innerHTML = '';
    option.forEach(function(value) {
        dropDown.innerHTML += '<option name="' + value + '">' + value + '</option>';
    });
}
; */



var mainInput = document.getElementById("inputPrime");
var workoutStyle = ["strength", "Cardio"];

for(var z = 0; z < workoutStyle.length; z++) {
    var style = workoutStyle[z];
    var xx = document.createElement("option");
    xx.textContent = style;
    xx.value = style;
    mainInput.appendChild(xx)
}