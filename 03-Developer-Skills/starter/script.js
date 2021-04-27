// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
// Using Google, StackOverflow and MDN

///////////////////////////////////////
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
    let max = temps[0]
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp <  min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
}

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude)

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0]
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp <  min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
}

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew)
*/
/*
///////////////////////////////////////
// Debugging with the Console and Breakpoints

const measureKelvin = function () {
    const measurement = {
        type: 'temp', 
        unit: 'celsius',

        // C) FIX
        value: Number(prompt('Degrees celsius: '))
    }

    // B) FIND
    console.table(measurement);
    const kelvin = measurement.value + 273;
    return kelvin;
}

// A) Identify
console.log(measureKelvin());
*/

/* -------------------- CODING CHALLENGE 1 -------------------- */

/*
1) Understanding the problem
- Array transformed to a string separated by ...

2) Sub-problems
- Transform array to string
- Transform each element into string with ºC 
- String needs to contain day (index + 1)
- Separated by ...
- Log result

3) Research...

4) Pesudo code
function printForcast (arr)
for loop
log

call function ([array])
*/

function printForecast (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}ºC in ${i + 1} days ... `
    }
    console.log('...', str);
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

/* -------------------- CODING CHALLENGE 1 -------------------- */