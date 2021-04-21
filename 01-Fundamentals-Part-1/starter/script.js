/*
let js = 'amazing';
console.log(40 + 8 + 23 -10);

console.log("Kristine");
console.log(25);

let firstName = "Kristine";
console.log(firstName);

let country = "USA";
let continent = "NA";
let population = 331002651;

console.log(country);
console.log(continent);
console.log(population);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 25);
// console.log(typeof 'Kristine');

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1995;
console.log(year);
console.log(typeof year);
*/

/* 
let age = 25;
age = 26;

const birthYear = 1995;

var job = 'programmer';
job = 'teacher';

lastName = 'Legaspi';
console.log(lastName);
*/

/*
const now = 2021;
const ageKris = now - 1995;
const ageKat = now - 1997;
console.log(ageKris, ageKat);

console.log(ageKris * 2, ageKris / 10, 2 ** 3);

const firstName = 'Kristine';
const lastName = 'Legaspi';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // 99
console.log(x);

console.log(ageKris > ageKat);
console.log(ageKat >= 18);

const isFullAge = ageKat >= 18;
console.log(now - 1995 > now - 1997);
*/

/*
const now = 2021;
const ageKris = now - 1995;
const ageKat = now - 1997;

console.log(now - 1995 > now - 1997);

console.log(25-10-5); // 10

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageKris + ageKat) / 2;
console.log(ageKris, ageKat, averageAge);
*/

/* -------------------- CODING CHALLENGE 1 -------------------- */

// Test Data 1
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2
let johnBMI = johnMass / johnHeight ** 2
let markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI, markHigherBMI);

// Test Data 2
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

markBMI = markMass / markHeight ** 2
johnBMI = johnMass / johnHeight ** 2
markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI, markHigherBMI);

/* -------------------- CODING CHALLENGE 1 -------------------- */

/*
const firstName = 'Kristine';
const occupation = 'student';
const birthYear = 1995;
const year = 2021;

const kristine = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + occupation + '!';
console.log(kristine)

const kristineNew = `I'm ${firstName}, a ${year - birthYear} year old ${occupation}!`;
console.log(kristineNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);
*/

/* 
const age = 18;
// const isOldEnough = age >= 20;

// if (isOldEnough) {
if (age >= 20) {
    console.log('Kat can start drinking alcohol 🍺');
} else {
    const yearsLeft = 21 - age;
    console.log(`Kat is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1995;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/* -------------------- CODING CHALLENGE 2 -------------------- */

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`)
}

/* -------------------- CODING CHALLENGE 2 -------------------- */

/* 
const inputYear = '1995';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 26);

console.log(Number('Kristine'));
console.log(typeof NaN);

// Type Coercion
console.log('I am ' + 25 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '3');
console.log('23' / '3');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

/*
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(undefined));
console.log(Boolean('Kristine'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all :D");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log("Yay! Height is defined.");
} else {
    console.log("Height is undefined.");
}
*/

/*
const age = 18;
if (age === 18) {
    console.log("You're an adult");
}

if (age == 18) {
    console.log("You're an adult (loose)");
}

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // 22 === 23 -> False
    console.log("Cool! 23 is a great number!");
} else if (favorite === 7) {
    console.log("7 is also a cool number");
} else if (favorite === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23 or 7");
}

if (favorite !== 23) {
    console.log("Why not 23?");
}
*/

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}
*/

/* -------------------- CODING CHALLENGE 3 -------------------- */

// Data 1
let dolphinsScore = (96 + 108 + 89) / 3
let koalasScore = (88 + 91 + 110) / 3
console.log(dolphinsScore, koalasScore);

if (dolphinsScore > koalasScore) {
    console.log(`Dolphins win with a score of ${dolphinsScore}`);
} else if (dolphinsScore === koalasScore) {
    console.log(`It's a tie! Scores are ${dolphinsScore} to ${koalasScore}`);
} else {
    console.log(`Koalas win with a score of ${koalasScore}`);
}

// Data 2
dolphinsScore = (97 + 112 + 101) / 3
koalasScore = (109 + 95 + 123) / 3
console.log(dolphinsScore, koalasScore);

// Bonus 1
if ((dolphinsScore > koalasScore) && (dolphinsScore >= 100)) {
    console.log(`Dolphins win with a score of ${dolphinsScore} and above 100!`);
} else if (dolphinsScore === koalasScore) {
    console.log(`It's a tie! Scores are ${dolphinsScore} to ${koalasScore}`);
} else if ((koalasScore > dolphinsScore) && (koalasScore >= 100)){
    console.log(`Koalas win with a score of ${koalasScore} and above 100!`);
} else {
    console.log(`No team scored over 100.`);
}

// Data 3
dolphinsScore = (97 + 112 + 101) / 3
koalasScore = (109 + 95 + 106) / 3
console.log(dolphinsScore, koalasScore);

// Bonus 2
if ((dolphinsScore > koalasScore) && (dolphinsScore > 100)) {
    console.log(`Dolphins win with a score of ${dolphinsScore} and above 100!`);
} else if ((dolphinsScore === koalasScore) && (dolphinsScore && koalasScore >= 100)) {
    console.log(`It's a tie! Scores are ${dolphinsScore} to ${koalasScore}`);
} else if ((koalasScore > dolphinsScore) && (koalasScore > 100)){
    console.log(`Koalas win with a score of ${koalasScore} and above 100!`);
} else {
    console.log(`No team wins the trophy.`);
}

/* -------------------- CODING CHALLENGE 3 -------------------- */

/*
const day = 'Thursday';

switch (day) {
    case 'Monday':
        console.log('Study for interviews');
        console.log('Study for computer science class');
        break;
    case 'Tuesday':
        console.log('Run errands');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Review data structures and algorithms');
        break;
    case 'Friday':
        console.log('Work on projects');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Spend time with family');
        break;
    default:
        console.log('Not a valid day');
}

if (day === 'Monday') {
    console.log('Study for interviews');
    console.log('Study for computer science class');
} else if (day === 'Tuesday') {
    console.log('Run errands');
} else if (day === 'Wednesday' || 'Thursday') {
    console.log('Review data structures and algorithms');
} else if (day === 'Friday') {
    console.log('Work on projects');
} else if (day === 'Saturday' || 'Sunday') {
    console.log('Spend time with family');
} else {
    console.log('Not a valid day');
}
*/

/*
const age = 25;
// age >= 18 ? console.log("I like to drink wine.") : console.log("I like to drink water.");

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);
*/

/* -------------------- CODING CHALLENGE 4 -------------------- */

let bill = 275;
let tip = (bill <= 300 && bill >= 50) ? (bill * 0.15) : (bill * 0.20);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);

bill = 40;
tip = (bill <= 300 && bill >= 50) ? (bill * 0.15) : (bill * 0.20);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);

bill = 430;
tip = (bill <= 300 && bill >= 50) ? (bill * 0.15) : (bill * 0.20);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);

/* -------------------- CODING CHALLENGE 4 -------------------- */