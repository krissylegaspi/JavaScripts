'use strict';
/*
function calcAge(birthYear) {
    const age = 2021 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
        console.log(output);

        if (birthYear >= 1981  && birthYear <= 1996) {
            var millenial = true;
            // Creating NEW variable with same name as outer scope's variable
            const firstName = 'Kat';

            // Reassigning out scope's variable
            output = 'NEW OUTPUT!';

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Kristine';
calcAge(1995);
*/

/*
// var firstName = 'Kat';

const kristine = {
    firstName: 'Kristine',
    year: 1995,
    calcAge: function() {
        // console.log(this);
        console.log(2021 - this.year);

        // Solution 1
        // const self = this; // self or that
        // const isMillenial = function() {
        //     console.log(self);
        //     // console.log(this.year >= 1981 && this.year <= 1996);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

        // Solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };

        isMillenial();
    },
    greet: () => {
        console.log(this);
        console.log(`Hey, ${this.firstName}`);
    },
};

kristine.greet();
kristine.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//     console.log(arguments);
//     a + b;
// };

// addArrow(2, 5, 8);
*/
/*
let age = 25;
let oldAge = age;
age = 26;

console.log(age);
console.log(oldAge);

const me = {
    name: 'Kristine',
    age: 25,
};

const friend = me;
friend.age = 27;
console.log('Friend: ', friend);
console.log('Me: ', me);
*/

/*
// Primitive types
let lastName = 'Legaspi';
let oldLastName = lastName;
lastName = 'Castro';
console.log(lastName, oldLastName);

// Reference types
const kristine = {
    firstName: 'Kristine',
    lastName: 'Legaspi',
    age: 25,
};

const marriedKristine = kristine;
marriedKristine.lastName = 'Castro';
console.log('Before marriage: ', kristine);
console.log('After marriage: ', marriedKristine);

// marriedKristine = {};

// Copying objects
const kristine2 = {
    firstName: 'Kristine',
    lastName: 'Legaspi',
    age: 25,
    family: ['Kat', 'Teri', 'Ceas'],
};

const kristineCopy = Object.assign({}, kristine2);
kristineCopy.lastName = 'Castro';

kristineCopy.family.push('Jehd');
kristineCopy.family.push('Jay');
console.log('Before marriage: ', kristine2);
console.log('After marriage: ', kristineCopy);
*/