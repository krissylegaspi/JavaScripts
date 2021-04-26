'use strict'; // Enables Strict Mode in JavaScript

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive.');
*/

/*
function logger() {
    console.log('My name is Kristine');
}

// Calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
/*
// Function declaration
function calcAge1(birthYear) {
    const age = 2021 - birthYear;
    return age;
}

const age1 = calcAge1(1995);
console.log(age1);

// Function expression / Anonymous function
const calcAge2 = function (birthYear) {
    const age = 2021 - birthYear;
    return age;
}

const age2 = calcAge2(1997);
console.log(age1, age2);

// Function declaration
function percentageOfWorld1(population) {
    const givenPopulation = population / 7900 * 100
    return givenPopulation;
}

const populationChina = percentageOfWorld1(1441);
console.log(populationChina);

// Function expression / Anonymous function
const percentageOfWorld2 = function (population) {
    const givenPopulation = population / 7900 * 100
    return givenPopulation;
}

const populationUS = percentageOfWorld2(1441);
const populationUK = percentageOfWorld2(1441);

console.log(populationChina, populationUS, populationUK);
*/

/*
// Arrow function
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1995, 'Kristine'));
*/
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

/* 
const calcAge = function(birthYear) {
    return 2021 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1995, 'Kristine'));
console.log(yearsUntilRetirement(1945, 'Kat'));

*/

/* -------------------- CODING CHALLENGE 1 -------------------- */

const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3);

// Data 1
// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);

// console.log('avgDolphins: ' + avgDolphins);
// console.log('avgKoalas: ' + avgKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins.");
    }
}

// Data 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

checkWinner(avgDolphins, avgKoalas)

// Data 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas)

/* -------------------- CODING CHALLENGE 1 -------------------- */

/*
const friend1 = 'Jehd';
const friend2 = 'Dat';
const friend3 = 'Will';

const friends = ['Jehd', 'Dat', 'Will'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Kevin';
console.log(friends);

console.log(friends.length);
console.log(friends[friends.length - 1]);

const firstName = 'Kristine';
const kristine = [firstName, 'Legaspi', 2021 - 1995, 'student', friends];
console.log(kristine);
console.log(kristine.length);

// Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/* 
const friends = ['Jehd', 'Dat', 'Will'];

// Add elements
const newLength = friends.push('Kevin');
console.log(friends);
console.log(newLength);

friends.unshift('Kat');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Dat'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Dat'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Jehd')) {
    console.log('You have a friend called Jehd');
}
*/

/* -------------------- CODING CHALLENGE 2 -------------------- */

function calcTip (bill) {
    return (bill <= 300 && bill >= 50) ? (bill * 0.15) : (bill * 0.20);
}

// const answer = calcTip(100);
// console.log(answer);

let bills = [125, 555, 44]
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

console.log('bills: ', bills);
console.log('tips: ', tips);

const total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];

console.log('total: ', total);

/* -------------------- CODING CHALLENGE 2 -------------------- */

/* 
const kristine = {
    firstName: 'Kristine',
    lastName: 'Legaspi',
    age: 2021 - 1995,
    job: 'Student',
    friends: ['Jehd', 'Dat', 'Will']
};

console.log(kristine);

console.log(kristine.lastName);
console.log(kristine['lastName']);

const nameKey = 'Name';
console.log(kristine['first' + nameKey])
console.log(kristine['last' + nameKey])

const interestedIn = prompt('What do you want to know about Kristine? Choose between firstName, lastName, age, job, and friends');

if (kristine[interestedIn]) {
    console.log(kristine[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

kristine.location = 'California';
kristine['linkedin'] = 'kristine-legaspi';
console.log(kristine);

// Challenge
// "Kristine has 3 friends, and his best friend is called Jehd"

console.log(`${kristine.firstName} has ${kristine.friends.length} friends, and her best friend is called ${kristine.friends[0]}`);
*/

/*
const kristine = {
    firstName: 'Kristine',
    lastName: 'Legaspi',
    birthYear: 1995,
    job: 'Student',
    friends: ['Jehd', 'Dat', 'Will'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2021 - birthYear;
    // }

    // calcAge: function() {
    //     // console.log(this);
    //     return 2021 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${kristine.job}, and she ${this.hasDriversLicense ? 'has a' : 'does not have a'} driver's license.`;
        return this.summary;
    }
};

console.log(kristine.calcAge());
// console.log(kristine['calcAge'](1995));

console.log(kristine.age);
console.log(kristine.age);
console.log(kristine.age);

// Challenge
// "Kristine is a 26-year old student, and she has a driver's license."

// if (kristine.hasDriversLicense) {
//     const driversLicense = 'has a';
//     console.log(`${kristine.firstName} is a ${kristine.age}-year old ${kristine.job}, and she ${driversLicense} driver's license.`)
// } else {
//     const driversLicense =  "does not have a"
//     console.log(`${kristine.firstName} is a ${kristine.age}-year old ${kristine.job}, and she ${driversLicense} driver's license.`)
// }

console.log(kristine.getSummary());
*/

/* -------------------- CODING CHALLENGE 3 -------------------- */

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
} else {
    console.log("They have the same BMI.");
}

/* -------------------- CODING CHALLENGE 3 -------------------- */

/* 
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
*/

/* 
const kristineArray = [
    'Kristine',
    'Legaspi',
    2021 - 1995,
    'Student',
    ['Jehd', 'Dat', 'Will'],
    true
];

const types = [];

// console.log(kristineArray[0])
// console.log(kristineArray[1])
// ...
// console.log(kristineArray[4])

for (let i = 0; i < kristineArray.length; i++) {
    // Reading from kristineArray
    console.log(kristineArray[i], typeof kristineArray[i]);

    // Filling types array
    // types[i] = typeof kristineArray[i];

    types.push(typeof kristineArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}

console.log(ages);

// Continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < years.length; i++) {
    if (typeof kristineArray[i] !== 'string') continue;
    
    console.log(kristineArray[i], typeof kristineArray[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < years.length; i++) {
    if (typeof kristineArray[i] === 'number') break;
    
    console.log(kristineArray[i], typeof kristineArray[i]);
}
*/
/* 
const kristineArray = [
    'Kristine',
    'Legaspi',
    2021 - 1995,
    'Student',
    ['Jehd', 'Dat', 'Will']
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = kristineArray.length - 1; i >= 0; i--) {
    console.log(i, kristineArray[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
    }
}
*/

/*
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
*/

/* -------------------- CODING CHALLENGE 4 -------------------- */

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
const totals = [];

// function calcTip (bill) {
//     return (bill <= 300 && bill >= 50) ? (bill * 0.15) : (bill * 0.20);
// }

for (let i = 0; i < bills.length; i++) {
    const tipArray = calcTip(bills[i]);
    tips.push(tipArray);
    totals.push(tipArray + bills[i]);
}
console.log(bills, tips, totals);

// Bonus
function calcAvg (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log('totals: ', calcAvg(totals));
console.log('tips: ', calcAvg(tips));

/* -------------------- CODING CHALLENGE 4 -------------------- */