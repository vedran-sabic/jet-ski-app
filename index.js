/* 
1. pripremamo se za brojanje klikova na buttonu - radimo varijablu counter
2. dodajemo onclick event listenere na HTML buttone, 
    tako omogućavamo da se pozove JS funkcija klikom na svaki button
3. deklariramo funkcije koje će se izvršiti svakim klikom na te buttone
4. spajamo se na h2 element, da tu prikažemo vrijednost brojača
5. spajamo se na h3 element, da tu prikažemo spremljene vrijednosti
6. refaktoriramo sve koristeći nizove
7. dodajemo event listener na reset button
8. deklariramo funkciju koja će se izvršiti klikom na reset button
*/

let counter = 0;
// Document Object Model - pristupamo HTML elementima h2 i h3
let numberOfPassengers = document.getElementById("number-of-passengers");
let numberOfRides = document.getElementById("number-of-rides");
// stvaramo prazan array
let todaysRides = [];

function add() {
    counter += 1;
    numberOfPassengers.innerHTML = counter;
}

function save() {
    // push() dodaje novi član na kraj niza 
    todaysRides.push(counter);
    // join() uzima član po član arraya i odvaja ih načinom navedenim u navodnicima, pa od svega toga radi string
    numberOfRides.textContent = `Današnje vožnje (broj putnika): ${todaysRides.join(' - ') || 0}`;
    counter = 0;
    numberOfPassengers.textContent = counter;
}

function reset() {
    counter = 0;
    todaysRides = [];
    numberOfRides.textContent = `Današnje vožnje (broj putnika): ${todaysRides.join(' - ') || 0}`;
    numberOfPassengers.textContent = counter;
}