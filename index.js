/* 
1. pripremamo se za brojanje klikova na buttonu - radimo varijablu counter
2. onclick event listenerom spajamo JS funkciju na HTML button
3. spajamo se na h2 element, da se tu vidi vrijednost brojača
*/

let counter = 0;

// Document Object Model - pristupamo HTML elementima h2 i h3
let numberOfPassengers = document.getElementById("number-of-passengers");
let numberOfRides = document.getElementById("number-of-rides");

function add() {
    counter += 1;
    numberOfPassengers.innerHTML = counter;
}

function save() {
    let counterString = counter + " - ";
    numberOfRides.innerHTML += counterString;
    counter = 0;
    numberOfPassengers.innerHTML = 0;
}