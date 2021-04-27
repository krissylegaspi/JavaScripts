'use strict';

/*
const bookings = [];

const createBooking = function(
    flightNum, 
    numPassengers = 1, 
    price = 199 * numPassengers
    ) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    }

    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
*/

/*
const flight = 'LH234';
const kristine = {
    name: 'Kristine Legaspi',
    passport: 292834982
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 292834982) {
        alert('Checked in')
    } else {
        alert('Wrong passport!');
    }
}

// checkIn(flight, kristine);
// console.log(flight);
// console.log(kristine);

// // Is the same as doing...
// const flightNum = flight;
// const passenger = kristine;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
}

newPassport(kristine);
checkIn(flight, kristine);

*/

/*
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others]= str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// ------------------------- REVIEW 130
// Higher order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`)
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function() {
    console.log('High five!');
}

document.body.addEventListener('click', high5);

['Kristine', 'Kat', 'Jehd'].forEach(high5);
*/

/*
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Kristine')

greet('Hello')('Kristine');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Kris');
*/

/*
const runOnce = function() {
    console.log('This will never run again');
};
runOnce();

// IIFE
(function() {
    console.log('This will never run again');
    const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);
*/

/*
const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
*/