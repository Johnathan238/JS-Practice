'use strict';

/** Strict Mode **/

// let hasDriversLicense = false
// const passTest = true

// if (passTest) hasDriversLicense = true
// if (hasDriversLicense) console.log("I'm driving today!");

/** Functions **/

// function marioJudah() {
// console.log("MARIOOOOO JUDAHHHHH");
// }

// calling / running / invoking function
// marioJudah()

// function fruitProcessor (apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges. `

//     return juice
// }

// const aJuice = fruitProcessor(6,4)
// alert(aJuice)

// const aoJuice = fruitProcessor(5, 5)
// alert(aoJuice)


// function yesSir() {
// const mJ = prompt("You Fuck With MARIOOOOO JUDAHHHHH 👹🎸☾?")
// const marioJudah = mJ === 'yes' || mJ === 'YES' || mJ === 'Yes' ? alert(`I FUCKED WITH YOU CUZ YOU SAID ${mJ}🎸`) : alert(`I DONT FUCK WITH YOU ☾`)

// return marioJudah
// }

/* Function Declaration */
// function idk(chickenWings, generalTossChicken){
//     const orderPlease = `I would like ${chickenWings} orders of Chicken Wings & ${generalTossChicken} orders of General Toss Chicken. Thank You! `

//     return orderPlease
// }

// const orderOne = idk(2, 2)
// alert(orderOne)

/* Function Expression */

// const calAge1 = function (birthYear) {
//     return 2037 - birthYear;
// }


// const calAge2 = calAge1(2000)
// console.log(calAge2);

/* Arrow Function*/

// const calcAge3 = birthYear => 2029 - birthYear;
// const age3 = calcAge3(2000)
// console.log(age3);

// const yearUR = (birthYear, firstName) => {
//     const age = 2037 - birthYear
//     const retirement = 65 - age
//     // return retirement
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearUR(2000, 'Sean'));

/* Functions Calling Other Functions */
// function cutPieces(food){
//     return food * 6;
// }


// function idk(chickenWings, generalTossChicken){
// const chickenWingsP = cutPieces(chickenWings)
// const generalTossChickenP = cutPieces(generalTossChicken)

//     const orderPlease = `I would like ${chickenWingsP} orders of Chicken Wings & ${generalTossChickenP} orders of General Toss Chicken. Thank You! `

//     return orderPlease
// }

// // idk(1,1)

// console.log(idk(2, 5))

// const hMFF = favoriteFood => favoriteFood + 1; // Arrow Function

// const nFF = (favoriteFood) => {
// const hMFF =  ++favoriteFood;
// return hMFF
// }

// console.log(nFF(5));

// /* Reviewing Functions */
// function age1(birthYear){ // Function Declaration
//     return 2037 - birthYear
// }

// const yearUR = function (birthYear, firstName) { // Function Expression
//     const age = age1(birthYear)
//     const retirement = 65 - age

//     if (retirement > 0){
//         return retirement
//     } else {
//         return `${firstName} is retired`
//     }
//     // return retirement
//     // return `${firstName} retires in ${retirement} years`
// }

// console.log(yearUR(2002, 'Sean'))
// console.log(yearUR(1970, 'Mario'))

// * Coding Challenge Function My version *//

// const calcAvg = (a, b, c) => (a + b + c ) / 3

// const avgScores1 = calcAvg(40, 70, 100)
// const avgScores2 =  calcAvg(80, 40, 50)
// console.log(avgScores1, avgScores2);

// const checkWinner = function(fDscores, fKscores) {
//     if (fDscores => 2 * fKscores) {
//         return `Dolphines win (${fDscores} vs ${fKscores})`
//     } else if (fKscores => 2 * fDscores){
//         return `koalas win (${fKscores} vs ${fDcores})`
//     } else {
//         return `NOBODY WON !`
//     }
// }

// console.log(checkWinner(avgScores1, avgScores2));

// * Instructor solution *//

// const calcAvg = (a, b, c) => (a + b + c ) / 3

// const avgScores1 = calcAvg(44, 60, 71)
// const avgScores2 =  calcAvg(65, 54, 49)
// console.log(avgScores1, avgScores2);

// const checkWinner = function(fDScores, fKScores){
//     if (fDScores => 2 * fKScores) {
//         return `Dolphines win (${fDScores} vs ${fKScores})`
//     } else if (fKScores >= 2 * fDScores){
//         return `koalas win (${fKScores} vs ${fDScores})`
//     } else {
//         return `NOBODY WON !`
//     }
// }

// console.log(checkWinner(avgScores1, avgScores2))

// * Array intro *//

// const whoTFISTHESEPPL = ['Mario Judah', 'Sean fatneek', 'Nick fatneek']
// console.log('====================================');
// console.log(whoTFISTHESEPPL);
// console.log('====================================');

// const years = new Array(2000, 2054, 3000, 3001)
// console.log('====================================');
// console.log(years);
// console.log('====================================');

// console.log('====================================');
// console.log(whoTFISTHESEPPL[1]);
// console.log('====================================');

// console.log('====================================');
// console.log(whoTFISTHESEPPL.length);
// console.log('====================================');

// console.log('====================================');
// console.log(whoTFISTHESEPPL[whoTFISTHESEPPL.length - 1]);
// console.log('====================================');

// whoTFISTHESEPPL[2] = 'Mandem'
// console.log('====================================');
// console.log(whoTFISTHESEPPL);
// console.log('====================================');

// whoTFISTHESEPPL[3] = 'IDK'

// const tSTMEDAD = ['TRUST', 'ME', 'DADDY', whoTFISTHESEPPL]
// console.log(tSTMEDAD);
// console.log(tSTMEDAD.length);


// Array Ex
// const calAge1 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1998, 2002, 2020]

// const age1 = calAge1(years[0])
// const age2 = calAge1(years[1])
// const age3 = calAge1(years[2])
// console.log(age1, age2, age3);

// const ages = [age1, age2, age3]
// console.log(ages);


// * Basic Array Operations (Methods) *//

// ADD elements
// const yEP = ['TRUST', 'ME']
// yEP.push('DADDY') // add new value at the end
// console.log('====================================');
// console.log(yEP);
// console.log('====================================');

// yEP.unshift('FINNA', 'SCOPE', 'YOU') // add new value at the front of the array
// console.log('====================================');
// console.log(yEP);
// console.log('====================================');

// REMOVE elements

// yEP.pop() // removes the last element
// console.log('====================================');
// console.log(yEP);
// console.log('====================================');

// yEP.shift() // removes first element
// console.log('====================================');
// console.log(yEP);
// console.log('====================================');

// console.log(yEP.indexOf('TRUST'));

// console.log(yEP.includes('TRUST'));

// if (yEP.includes('TRUST')){
//     console.log('TRUST DADDY');
// } else {
//     console.log('I DONT TRUST YOU');
// }

// ** Coding Challenge #2 Array **//
// const tip = (20/100)
// const tip2 = (15/100)
// console.log(tip, tip2)

// const bill = (275)
// const bill1 = (40)
// const bill3 = (430)
// console.log(bill)

// const newBill = bill >= 50 && bill <= 300 ? bill * tip2 : bill * tip;
// console.log(`The bill ${bill}, the tip was ${tip2}, and total value ${bill + tip2}`)

// const newBill1 = bill1 >= 50 && bill1 <= 300 ? bill1 * tip2 :  bill1 * tip;
// console.log(`The bill ${bill1}, the tip was ${tip}, and total value ${bill + tip}`)

// const newBill2 = bill3 >= 50 && bill3 <= 300 ? bill3 * tip2 :  bill3 * tip;
// console.log(`The bill ${bill3}, the tip was ${tip}, and total value ${bill3 + tip}`)

// const tip = (20/100)
// const tip2 = (15/100)
// console.log(tip, tip2)


// const bills = [125, 555, 44]
// console.log(bills);

// console.log(bills[0] * tip2);

// const newBill = bills[0] >= 50 && bills[0] <= 300 ? bills[0] * tip2 : bills[0] * tip;
// console.log(` Total value ${bills[0] + tip2}`)

// const newBill1 = bills[1] >= 50 && bills[1] <= 300 ? bills[1] * tip2 :  bills[1] * tip;
// console.log(` Total value ${bills[1] + tip}`)

// const newBill2 = bills[2] >= 50 && bills[2] <= 300 ? bills[2] * tip2 :  bills[2] * tip;
// console.log(` Total value ${bills[2] + tip}`)

// const calcTip = [newBill, newBill1, newBill2]
// console.log(calcTip);


// ** Instructor Solution ** //


// const calcTip = function (bill) {
// return bill >= 50 && bill <= 300 ? bill * tip2 :  bill * tip;
// }

// const bills = [125, 555, 44]
// console.log(bills);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(tips);


// * Intro to objects * //

// const mJudah = {
// firstName: 'Mario',
// lastName: 'Judah',
// job: 'Rockstar',
// age: 22,
// friends: ['Fatneek Sean', 'Trippe Redd']
// }

// * Dot & Bracket Notation * //

// const mJudah = {
// firstName: 'Mario',
// lastName: 'Judah',
// job: 'Rockstar',
// age: 22,
// friends: ['Fatneek Sean', 'Trippe Redd']
// }


// // console.log('====================================');
// // console.log(mJudah);
// // console.log('====================================');
// // console.log('====================================');
// // console.log(mJudah.firstName);
// // console.log('====================================');
// // console.log('====================================');
// // console.log(mJudah['lastName']);
// // console.log('====================================');

// // const nameKey = 'Name'
// // console.log('====================================');
// // console.log(mJudah['first' + nameKey]);
// // console.log(mJudah['last' + nameKey]);
// // console.log('====================================');

// const letKMJ = prompt('SO WHAT YOU WANNA KNOW BABES')
// console.log('====================================');
// console.log(mJudah[letKMJ]);
// console.log('====================================');

// if(mJudah[letKMJ]){
// alert(mJudah[letKMJ])
// } else {
// alert(`Wrong input sir! Choose Name, Job, age or friends`)
// }

// mJudah.location = 'London'
// console.log(mJudah);

// mJudah.friends.unshift = 'Mick'
// console.log(mJudah.friends[length]);

// mJudah.friends.shift = 'Mick'
// console.log('====================================');
// console.log(mJudah.friends[length]);
// console.log('====================================');

// console.log(`${mJudah.firstName} has ${mJudah.friends.length}, and his BFF is called ${mJudah.friends[1]}`);

// * Object Method * //

// const mJudah = {
// firstName: 'Mario',
// lastName: 'Judah',
// job: 'Rockstar',
// birthYear: 1999,
// friends: ['Fatneek Sean', 'Trippe Redd'],
// hasDriversL: true,

// // calcAge: function (birthYear) {
// //   return 2100 - birthYear
// // }

// // calcAge: function () {
// //     console.log(this);
// //   return 2100 - this.birthYear
// // }

// calcAge: function () {
//       this.age = 2100 - this.birthYear
//     return this.age
// },

// //Challenge
// mInfo: function () {
//     this.name = console.log(`${mJudah.firstName} is a ${mJudah.calcAge()} old ${mJudah.job}, and he has a driver's license ${mJudah.hasDriversL}`);
//     return this.name
// }
// }

// console.log('====================================');
// console.log(mJudah.calcAge())
// console.log(mJudah.age);
// // console.log(mJudah['calcAge'](2002));
// console.log('====================================');

// //Challenge
// console.log(mJudah.mInfo());
// console.log(mJudah.name);

// challenge 3

// const johnSmith = {
// firstName: 'John',
// lastName: 'Smith',
// pounds: 171,
// height: 5,

// calcJBMI: function () {
//     this.JBMI = johnSmith.pounds / johnSmith.height ** 2
//     return this.JBMI
// }
// }

// console.log('====================================');
// console.log(johnSmith.calcJBMI());
// console.log('====================================');

// const markMiller = {
// firstName: 'Mark',
// lastName: 'Miller',
// pounds: 202,
// height: 6,

// calcMBMI: function () {
//     this.MBMI = markMiller.pounds / markMiller.height ** 2
//     return this.MBMI
// }
// }

// console.log(markMiller.calcMBMI());

// const whoBmiIsG = function () {
// if (johnSmith.calcJBMI() > markMiller.calcMBMI()) {
//     console.log(`John BMI ${johnSmith.calcJBMI()} is greater then Mark BMI ${markMiller.calcMBMI()}`);
// } else if (markMiller.calcMBMI() > johnSmith.calcJBMI()) {
//     console.log(`Mark BMI ${markMiller.calcMBMI()} is greater then John BMI ${johnSmith.calcJBMI()}`);
// } else {
//     console.log(`They both fam`);
// }
// }

// console.log('====================================');
// console.log(whoBmiIsG());
// console.log('====================================');

// *Iteration: The For Loop* //

// for loop keeps running while condition is TRUE
// for(let rep = 10; rep <= 30; rep++){
// console.log(`Lifitng weight with my brudda sean ${rep} 🏋️`);
// }

// *Looping arrays, breaking, & continuing* //

// const mJudah = [
// 'Mario',
// 'Judah',
// 'Rockstar',
// 22,
// ['Fatneek Sean', 'Trippe Redd'],
// 'TRUST ME DADDY',
// ['Are you SKUCKED']
// ]

// const types = []

// for(let i = 0; i < mJudah.length ; i++){
//     console.log(mJudah[i], typeof mJudah[i]);

//     // Filling types array
//     // types[i] = typeof mJudah[i]
//     types.push(typeof mJudah[i])
// }

// console.log(types);

// const years = [1974, 2000, 2020, 2030]
// const ages = []

// for (let i = 0; i < years.length; i++){
// ages.push(2045 - years[i])
// }

// console.log('====================================');
// console.log(ages);
// console.log('====================================');

// Continue & Break

// for (let i = 0; i < mJudah.length; i++){  //continue
// if (typeof mJudah[i] !== 'string') continue;
// console.log(mJudah[i], typeof mJudah[i]);
// }

// console.log('====================================');

// for (let i = 0; i < mJudah.length; i++){  //break
// if (typeof mJudah[i] === 'number') break;
// console.log(mJudah[i], typeof mJudah[i]);
// }

// ** Looping Backwards * Loops in Loops**//

// const mJudah = [
// 'Mario',
// 'Judah',
// 'Rockstar',
// 22,
// ['Fatneek Sean', 'Trippe Redd'],
// 'TRUST ME DADDY',
// ['Are you SKUCKED']
// ]

// for (let i = mJudah.length - 1; i >= 0; i--){
// console.log(i, mJudah[i]);
// }

// ** Loop over Loop **//
// for (let exercise = 1; exercise <= 3; exercise++ ){
// console.log(`---- Exercise ${exercise}`);

// for (let rep = 1; rep < 6; rep++){
//     console.log(`---- Exercise ${exercise} Reps are ${rep}`);
// }
// }

// ** While Loop ** //

// for loop keeps running while condition is TRUE // just to compare
// for(let rep = 10; rep <= 30; rep++){
// console.log(`Lifitng weight with my brudda sean ${rep} 🏋️`);
// }

// let rep = 1;
// while (rep <= 6) {
// console.log(`Lifitng weight with my brudda sean ${rep} 🏋️`);

// rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1


// while (dice !== 6){
// console.log(`You rolled a ${dice}`);
// dice = Math.trunc(Math.random() * 6) + 1
// if (dice === 6) console.log(`Loop is about to end at ${dice}`);
// }


// ** Instructor Solution ** //


// const calcTip = function (bill) {
// return bill >= 50 && bill <= 300 ? bill * tip2 :  bill * tip;
// }

// const bills = [125, 555, 44]
// console.log(bills);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(tips);

// ** Challenge #4  Loops** //
// const bills = [22, 295, 176, 40, 37, 105, 10, 1100, 86, 52]
// const tips = []
// const totals = []

// const calcTip = function (bill) {
// return bill >= 50 && bill <= 300 ? bill * 0.15 :  bill * 0.2;
// }

// for(let i = 0; i < bills.length; i++){
// tips.push(calcTip(bills[i]))
// totals.push(bills[i] + tips[i])
// }

// console.log('====================================');
// console.log(bills, tips, totals);
// console.log('====================================');

// ** Second part of the challenge **//
// let arr = [1,2,3,4]
// let totals = []

// const calcA = function (arr) {
// let sum = 0
// for (let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// // totals.push(arr[i] / sum)
// // console.log(sum);
// return sum / arr.length
// }

// console.log(calcA([1,2,3]));
// console.log(calcA(totals));
// calcAverage([1,2,3])

// console.log(arr);

// for(let i = 0; i < mJudah.length ; i++){
//     console.log(mJudah[i], typeof mJudah[i]);

//     // Filling types array
//     // types[i] = typeof mJudah[i]
//     types.push(typeof mJudah[i])
// }
// NOTE ** Loop over Loop ** //
// for (let exercise = 1; exercise <= 3; exercise++ ){
// console.log(`---- Exercise ${exercise}`);

// for (let rep = 1; rep < 6; rep++){
//     console.log(`---- Exercise ${exercise} Reps are ${rep}`);
// }
// }

// NOTE Random challenge  //
// function multiply(a, b){
// const cal = a * b

// return cal
// }

// console.log(multiply(2, 6))

// NOTE Sloving problems like a programmer //
// const tempt = [3, -2, -4, -1, 'error', 9, 7, 10, 18, 20, 5]

// 1) Understanding the problem
// what is the temp amplitude? ANSWER : difference between highest & lowest temp
// How to compute the max & min temps?

// 2) breaking it up
// How to ignore errors?
// Find max value from array
// Find min value from array
// Subtract min from max (amplitude) & return it

// const getTemp = function (temps) {
// let max = temps[0]
// let min = temps[0]

// for (let i = 0; i < temps.length; i++){
//     const newTemp = temps[i]

//     if (typeof newTemp !== 'number') continue;

//     if (newTemp > max) max = newTemp
//     if (newTemp < min) min = newTemp
// }
// console.log('====================================');
// console.log(max, min);
// console.log('====================================');
// return max - min;
// }

// const amp = getTemp(tempt)
// console.log('====================================');
// console.log(amp);
// console.log('====================================');

// problem 2
// Function should now rececive 2 arrays of temps

// const getTemp1 = function (t1, t2) {
// // const arr1 = ['a', 'b', 'c'] // NOTE -> MDN web doc "Array.concat"
// // const arr2 = ['d', 'e', 'f']
// // const arr3 = arr1.concat(t2)

// const temps = t1.concat(t2)
//     console.log('====================================');
//     console.log(temps);
//     console.log('====================================');

// let max = temps[0]
// let min = temps[0]

// for (let i = 0; i < temps.length; i++){
//     const newTemp = temps[i]

//     if (typeof newTemp !== 'number') continue;

//     if (newTemp > max) max = newTemp
//     if (newTemp < min) min = newTemp
// }
// console.log('====================================');
// console.log(max, min);
// console.log('====================================');
// return max - min;
// }

// const amp1 = getTemp1([5, 8, 10] , [5, 3, 6])
// console.log('====================================');
// console.log(amp1);
// console.log('====================================');

// NOTE debugging //
// const measK = function () {
// const meaS = {
//     type: 'temp',
//     unit: 'celsisu',

//     // NOTE  Fix bug

//     value: Number(prompt('Degrees C:'))
// }

// // NOTE Find bug
// console.log('====================================');
// console.table(meaS);
// console.log('====================================');

// const kel = meaS.value + 273;
// return kel
// }

// // NOTE Identify problem

// console.log('====================================');
// console.log(measK());
// console.log('====================================');

// // ** NOTE Going to use the Debugger in chrome ** //
// const tempt = [3, -2, -4, -1, 'error', 9, 7, 10, 18, 20, 5]

// const getTemp = function (temps) {
// let max = 0
// let min = 0

// for (let i = 0; i < temps.length; i++){
//     const newTemp = temps[i]

//     if (typeof newTemp !== 'number') continue;

//     if (newTemp > max) max = newTemp
//     if (newTemp < min) min = newTemp
// }
// console.log('====================================');
// console.log(max, min);
// console.log('====================================');
// return max - min;
// }

// const amp = getTemp(tempt)
// console.log('====================================');
// console.log(amp);
// console.log('====================================');

// ** NOTE Challenge #1 Think like a programmer //

// const arr1 = [17, 21, 23]
// // const arr2 = [12, 5, -5, 0, 4]

// const printForecast = function (arr) {

// for (let i = 0; i < arr.length; i++){
//     console.log('====================================');
//     console.log(`${arr[i]} in ${i + 1} days...`);
//     console.log('====================================');
// }
// console.log('====================================');
// console.log(arr);
// console.log('====================================');
// }

// console.log('====================================');
// console.log(printForecast([17, 21, 23]));
// console.log('====================================');

// *Iteration: The For Loop* //

// for loop keeps running while condition is TRUE
// for(let rep = 10; rep <= 30; rep++){
// console.log(`Lifitng weight with my brudda sean ${rep} 🏋️`);
// }

// ** Loop over Loop **//
// for (let exercise = 1; exercise <= 3; exercise++ ){
// console.log(`---- Exercise ${exercise}`);

// for (let rep = 1; rep < 6; rep++){
//     console.log(`---- Exercise ${exercise} Reps are ${rep}`);
// }
// }

// ** While Loop ** //

// for loop keeps running while condition is TRUE // just to compare
// for(let rep = 10; rep <= 30; rep++){
// console.log(`Lifitng weight with my brudda sean ${rep} 🏋️`);
// }

// let rep = 1;
// while (rep <= 6) {
// console.log(`Lifitng weight with my brudda sean ${rep} 🏋️`);

// rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1


// while (dice !== 6){
// console.log(`You rolled a ${dice}`);
// dice = Math.trunc(Math.random() * 6) + 1
// if (dice === 6) console.log(`Loop is about to end at ${dice}`);
// }

// NOTE ** Loop over Loop ** //
// for (let exercise = 1; exercise <= 3; exercise++ ){
// console.log(`---- Exercise ${exercise}`);

// for (let rep = 1; rep < 6; rep++){
//     console.log(`---- Exercise ${exercise} Reps are ${rep}`);
// }
// }

// NOTE Scoping //

// function calcAge(birthYear) {
// const age = 2055 - birthYear

//     function printAge(){
//       const output = `${firstName} ! You are ${age}, born in ${birthYear}`
//       console.log("🚀 ~ file: script.js ~ line 839 ~ printAge ~ output -", output)

//       if(birthYear >= 1981 && birthYear <= 1996) {
//         const mill = `Oh, your a millenial ${firstName}`
//         console.log("🚀 ~ file: script.js ~ line 843 ~ printAge ~ mill -", mill)

//       } else {
//         const iGen = `Oh, your a iGen ${firstName}`
//         console.log("🚀 ~ file: script.js ~ line 847 ~ printAge ~ iGen -", iGen)
//       }

//       function add(a, b) {
//         return a + b
//       }
//       console.log(add(1, 2))
//     }
//     printAge()

// return age
// }

// const firstName = 'Mario'
// calcAge(2020)

// /**
// * @param  {My computer was not turning on, but I got it fixing!} 2022
// */

// NOTE Hoisting & TDZ Practice \\

// Variable \\
// console.log('====================================');
// console.log(name , job, year);
// console.log('====================================');

// var name = "Mario"
// let job = "Rapper"
// const year = 1998

// //Function \\
// console.log(addDecl(5, 7));
// console.log(addexp(3, 4));
// console.log(addArrow(4,6));

// function addDecl(a, b) {
// return a + b
// }

// const addexp = function (a, b) {
// return a + b
// }

// const addArrow = (a , b) => a + b

// // Example
// if(!numProducts) deleteShoppingCart()
// var numProducts = 10;

// function deleteShoppingCart() {
// console.log("Products deleted!");
// }

// var x = 1
// let y = 2
// const z = 3

// THIS keyword //
// const calcAge = function(birthYear) {
// console.log(2055 - birthYear);
// console.log(this);
// }
// calcAge(2020)

// // This keyword is calling parent
// const calcAgeArr = birthYear => {
// console.log(2060 - birthYear);
// console.log(this);
// }
// calcAgeArr(2020)

// const baBoon = {
// year: 2001,
// calcAge: function (){
//     console.log(this);
//     console.log(2050 - this.year);
// }
// }
// baBoon.calcAge()

// const mario = {
// year: 2000,
// }

// mario.calcAge = baBoon.calcAge
// mario.calcAge()

// const f = baBoon.calcAge
// f()

// const sTi = {
// newOwner: "Freshyy",
// modal: "WRX STI",
// year: 2018,
// price: 30000,
//     carPayment: function (loan, apr, term){
//       console.log(this);
//       console.log(Math.ceil( loan / apr / term));

//       // const self = this // self or that
//       const affordCar = function (){
//         if (this.carPayment() >= 450 && this.carPayment() <= 500) {
//           console.log(`${this.newOwner}! You can afford the car payments`);
//         } else {
//           console.log(`${this.newOwner}! You can't afford this car yet`);
//         }
//       }
//       affordCar()
//       console.log(affordCar);
//     },

//     greet: () => {console.log(`${sTi.newOwner}, this is your car msrp, its ${sTi.price}`)
// },
// }
// sTi.greet()
// sTi.carPayment(30000, 4.00, 60)

// //** argument keyword **/
// const addExpr = function (a,b) {
// console.log(arguments);
// return a + b
// }
// addExpr(2,5)
// addExpr(2,5,8,12)

// ** Primitives **//
// let age = 21
// let oldAge = age
// age = 22
// console.log('====================================');
// console.log(age);
// console.log(oldAge);
// console.log('====================================');

// **  Object **/
// const who = {
// name: "sean",
// age: 20,
// }

// const oldSean = who
// oldSean.age = 19;

// ** More Practice **/
// let lastName = 'Judah'
// let oldLastName = lastName
// lastName = 'Judastar'

// const marioJudah = {
// firstName: "Mario",
// lastName: "Judah",
// age: 21,
// }
// console.log(marioJudah.age);

// const rockStar = marioJudah
// marioJudah.age = 22
// console.log(rockStar.age);

// Copying objects
// const marioJudah2 = {
//     firstName: "Mario",
//     lastName: "Judah",
//     age: 21,
//     songsMde: [1,2,3,4]
// }
// const marioCopy = Object.assign({}, marioJudah2)
// marioCopy.lastName = 'WTFISMARIOJUDAH'
// marioCopy.songsMde.push(5,6,7,8,9,10)
// console.log(marioCopy);
// console.log(marioJudah2);

// **Data structure **//

// **NOTE Destructing Arrays** //
// const arr = [2,4,6]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// const JDM = {
// Manufac: 'SUBARU',

// modals: [
//     'WRX',
//     'STI',
//     'OUTBACK FOR SHAPE UPS'
// ],

// colors: [
//     'World Rally Blue',
//     'Crystal White Pearl',
//     'Ice Silver Metallic',
//     'Pure Red',
//     'WR Blue Pearl',
//     'Lapis Blue Pearl',
//     'Dark Gray Metallic',
//     'Crystal Black Silica',
// ],

// order: function (wMODAL, wCOLOR) {
//     return [this.modals[wMODAL], this.colors[wCOLOR]]
// }
// }
// // Recive 2  return values rom a function
// const [MODAL, COLOR] = JDM.order(1,  5)
// console.log('====================================');
// console.log(MODAL, COLOR);
// console.log('====================================');

// let [main, ,second] = JDM.modals
// console.log('====================================');
// console.log(main, second);
// console.log('====================================');

// // ** Switching Variables **//
// [main, second] = [second, main]
// console.log('====================================');
// console.log(main , second);
// console.log('====================================');

// Nested Destructing
// const nested = [2, 6,[0, 3, 8, 4]]
// const [i, , [j, k]] = nested
// console.log('====================================');
// console.log(i, j, k);
// console.log('====================================');

// // Default Values
// const [ p=1,q=1,r=1 ] = [8,9]
// console.log(p, q, r);

// Destructing objects
// const orderSTI = {
//   Manufac: 'SUBARU',

//   modals: [
//     'WRX', 'STI', 'OUTBACK FOR SHAPE UPS'
//   ],

//   colors: [
//     'World Rally Blue',
//     'Crystal White Pearl',
//     'Ice Silver Metallic',
//     'Pure Red',
//     'WR Blue Pearl',
//     'Lapis Blue Pearl',
//     'Dark Gray Metallic',
//     'Crystal Black Silica',
//   ],

//   openingHours: {
//     Mon: {
//       open: 9,
//       close: 18
//     },

//     Wed: {
//       open: 9,
//       close: 18
//     },

//     Fri: {
//       open: 9,
//       close: 16
//     },

//     Sat: {
//       open: 10,
//       close: 14
//     },
//   },

//   orderDinner: function (res1, res2, res3) {
//     console.log('====================================');
//     console.log(`Here's our choices ${res1}, ${res2}, ${res3}`);
//     console.log('====================================');
//   }
// }

    // order: function (wMODAL, wCOLOR) {
    //     return [
    //         this.modals[wMODAL], this.colors[wCOLOR]
    //     ]
    // },

    // orderDelivery: function(wMODAL = 1, mainIndex = 1, address = 'Dover', time = '19:30'){
    //     console.log(`Order received! ${this.modals[wMODAL]} in ${this.colors[mainIndex]} will be delivered to ${address} at ${time}`);
    // }


// orderSTI.orderDelivery({
//     time: '19:30',
//     address: 'Dover',
//     mainIndex: 1,
//     starterIndex: 1,
// })

// const {Manufac, openingHours} = orderSTI
// console.log(Manufac, openingHours);

// const {openingHours: hours, colors: paint} = orderSTI
// console.log(hours, paint);

// //Useful for retriving data from API
// const {wheels = [], modals: trims = [] } = orderSTI
// console.log(wheels, trims);

//Mutating Variables
// let a = 111
// let b = 999
// const obj1 = {a: 23, b:7, c: 14}
// ({a, b} = obj1);
// console.log(a, b);

//Nested Objects 
// const { 
//     Fri: 
//     {
//         open: o, 
//         close: c,
//     } 
// } = openingHours;
// console.log(o, c);

// ** Spread Operator ** //
// const arr = [8, 9, 10]
// const newArr = [6, 7, ...arr]
// console.log('====================================');
// console.log(newArr);
// console.log('====================================');
// console.log('====================================');
// console.log(...newArr);
// console.log('====================================');

// OrderSTI
// k ,m  


// //Copy array
// const modalsCopy = [...orderSTI.modals]

// //Join arrays 
// const twoArrs = [...modalsCopy, ...orderSTI.colors]
// console.log('====================================');
// console.log(twoArrs);
// console.log('====================================');

//Iterables: Array, strings, maps, sets. Not Objects
// const str = "Yope"
// const letters = [...str, '', 'G.']
// console.log('====================================');
// console.log(letters);
// console.log('====================================');


// const resturants = [prompt(`Resturant-1`), prompt(`Resturant-2`), prompt(`Resturant-3`)]
// console.log("🚀 ~ file: script.js ~ line 1206 ~ resturants", resturants)

// orderSTI.orderDinner(...resturants)

//Objects
// const newOrder = {...orderSTI, Born:'Japan'}

// console.log("🚀 ~ file: script.js ~ line 1213 ~ newOrder", newOrder)

// const stiCopy = {...orderSTI}
// stiCopy.Manufac = 'JDM'
// console.log("🚀 ~ file: script.js ~ line 1217 ~ stiCopy", stiCopy)

//** REST Pattern & Parameters *// Pack things into Arr
// SPRED, because RIGHT side of =
// const iDKArr = [1, 2, 3, ...[5, 5, 6]]
// console.log(iDKArr);

// //REST, because LEFT side of =
// const [a, b, ...others] = [4, 5, 6, 7, 8]
// console.log('====================================');
// console.log(a,b, others);
// console.log('====================================');

// const jdmCars = {
//   Manufacturs: [
//     'Nissan',
//     'Toyota',
//     'Mazada',
//     'Subaru',
//     'Mitsubishi'
//   ],

//   orderVe: function(wModal, ...oModal){
//     console.log(wModal);
//     console.log(oModal);
//   }
// }

// jdmCars.orderVe('R34', 'Supra', 'RX7', 'STI', 'EVO')

// const [N, T, ...JDM] = [...jdmCars.Manufacturs]
// console.log('====================================');
// console.log(N,T,JDM);
// console.log('====================================');

//Objects
// const {HY, ...Manufacturs} = jdmCars.Manufacturs 
// console.log(Manufacturs);

// // 2) Functions 
// const add = function (...numbers){
//   let sum = 0
//   for (let i = 0; i < numbers.length; i++) 
//   sum += numbers[i]
//   console.log("🚀 ~ file: script.js ~ line 1251 ~ add ~ sum", sum) 
// }

// add(4,6)
// add(5,5,6,6,4,3,.2)

// const x = [54,67,49]
// add(...x)

//* Short Circuting (&& and ||) *//
//Use ANY data type & return ANY data type & short-circuting
// console.log('====================================');
// console.log(3 || 'STI');
// console.log('====================================');
// console.log('====================================');
// console.log('' || 'STi');
// console.log(true || 0);
// console.log(undefined || null);
// console.log('====================================');

// jdmCars.numberMan = 5
// const hmJDM = jdmCars.numberMan ? jdmCars.Manufacturs : 1
// console.log('====================================');
// console.log(hmJDM);
// console.log('====================================');

// const jdmCorrect = jdmCars.numberMan ?? 10
// console.log(jdmCorrect);

// const hmJDMS = jdmCars.numberMan || 1
// console.log('====================================');
// console.log(hmJDMS);
// console.log('====================================');

//* (&&) *//
// console.log('====================================');
// // console.log(0 && 'STI');
// console.log('====================================');
// console.log('====================================');
// console.log('Hello' && 25 && null & 'STI');
// console.log('====================================');

// if (jdmCars.numberMan) {
//   jdmCars.numberMan('Hyandi', 'Lexus', 'Acura')
// }

// jdmCars.numberMan && jdmCars.numberMan('Hyandi', 'Lexus', 'Acura')
// console.log('====================================');
// console.log(jdmCars.numberMan);
// console.log('====================================');

//** Logical Assigment Operator**/
// const idk1 = {
//   name: 'Podcast-Ayooo',
//   guest: 0
// }

// const idk2 = {
//   name: 'Podcast-WTF',
//   Owner: 'Freshyy'
// }

// // OR assignment operator
// // idk2.guest = idk1.guest || 4
// // console.log("🚀 ~ file: script.js ~ line 1324 ~ idk2.guest", idk2.guest)

// // idk1.guest ||= 4
// // console.log("🚀 ~ file: script.js ~ line 1328 ~ idk1.guest", idk1.guest)
// // idk2.guest ||= 4
// // console.log("🚀 ~ file: script.js ~ line 1330 ~ idk2.guest", idk2.guest)

// // nullish assignment operator (null or undefined)
// // idk1.guest ??= 4
// // console.log("🚀 ~ file: script.js ~ line 1328 ~ idk1.guest", idk1.guest)
// // idk2.guest ??= 4
// // console.log("🚀 ~ file: script.js ~ line 1330 ~ idk2.guest", idk2.guest)

// // && OPERATOR
// // idk2.Owner = idk2.Owner && '<<ANONYMOUS>>'
// idk1.Owner &&= '<<ANONYMOUS>>'
// console.log("🚀 ~ file: script.js ~ line 1341 ~ idk1.Owner", idk1.Owner)
// idk2.Owner &&= '<<ANONYMOUS>>'
// console.log("🚀 ~ file: script.js ~ line 1340 ~ idk2.Owner", idk2.Owner)

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored */



// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// // 1. -> //
// const [players1, players2] = game.players
// console.log("🚀 ~ file: script.js ~ line 1404 ~ players1, players2", players1, players2)

// 2. -> //
// const [gk, ...fieldPlayers] = players1
// console.log("🚀 ~ file: script.js ~ line 1408 ~ gk1", gk, fieldPlayers)

// const newWRX = [...orderSTI.modals, '2023-WRX']
// console.log('====================================');
// console.log(newWRX);
// console.log('====================================');

// 3. -> //
// const allPlayers = [...players1, ...players2]
// console.log("🚀 ~ file: script.js ~ line 1414 ~ allPlayers", allPlayers)

//4. -> //
// const players1Final = [...players1, 'Thiago', 'Coutinho' ,'Perisic']
// console.log("🚀 ~ file: script.js ~ line 1418 ~ players1Final", players1Final)

//5. -> //
// const {openingHours: hours, colors: paint} = orderSTI
// console.log(hours, paint);
// jdmCars.orderVe('R34', 'Supra', 'RX7', 'STI', 'EVO')

// const {x: draw} = game
// console.log("🚀 ~ file: script.js ~ line 1425 ~ game.odds", game)

//6. -> // Not finished
// const printGoals = function(...goalsScored){
//   let score = 0
//   for(let i = 0; i < goalsScored.length; i++)
//   score += goalsScored[i]
//   console.log("🚀 ~ file: script.js ~ line 1433 ~ printGoals ~ score", score)
  
// }

// const golazo = ['Davies', 'Muller', 'Lewandowski' ,'Kimmich']
// printGoals(golazo)

// // 2) Functions 
// const add = function (...numbers){
//   let sum = 0
//   for (let i = 0; i < numbers.length; i++) 
//   sum += numbers[i]
//   console.log("🚀 ~ file: script.js ~ line 1251 ~ add ~ sum", sum) 
// }

// add(4,6)
// add(5,5,6,6,4,3,.2)

// const x = [54,67,49]
// add(...x)


//7. -> //
//** Logical Assigment Operator**/
// const idk1 = {
//   name: 'Podcast-Ayooo',
//   guest: 0
// }

// const idk2 = {
//   name: 'Podcast-WTF',
//   Owner: 'Freshyy'
// }

// // OR assignment operator
// // idk2.guest = idk1.guest || 4
// // console.log("🚀 ~ file: script.js ~ line 1324 ~ idk2.guest", idk2.guest)

// // idk1.guest ||= 4
// // console.log("🚀 ~ file: script.js ~ line 1328 ~ idk1.guest", idk1.guest)
// // idk2.guest ||= 4
// // console.log("🚀 ~ file: script.js ~ line 1330 ~ idk2.guest", idk2.guest)

// // nullish assignment operator (null or undefined)
// // idk1.guest ??= 4
// // console.log("🚀 ~ file: script.js ~ line 1328 ~ idk1.guest", idk1.guest)
// // idk2.guest ??= 4
// // console.log("🚀 ~ file: script.js ~ line 1330 ~ idk2.guest", idk2.guest)

// // && OPERATOR
// // idk2.Owner = idk2.Owner && '<<ANONYMOUS>>'
// idk1.Owner &&= '<<ANONYMOUS>>'
// console.log("🚀 ~ file: script.js ~ line 1341 ~ idk1.Owner", idk1.Owner)
// idk2.Owner &&= '<<ANONYMOUS>>'
// console.log("🚀 ~ file: script.js ~ line 1340 ~ idk2.Owner", idk2.Owner)

// game.odds.team1 = game.odds.team2 || game.odds.x
// console.log("🚀 ~ file: script.js ~ line 1490 ~ game.odds.team1 - WINNER ->", game.odds.team1 )

/*
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);
// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);
// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win'); 
*/

//Looping-Arrays: The for-loop

// const game2 = [...players1, ...players2]

// for ( const players of game2 ) console.log(players);

// for ( const players of game2.players()){
//   console.log(players);
// }

// console.log([...game2.players]);

//Enchanced Object Literals
// const weekdays = ['Mon' , 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// // // const days = ['Mon' , 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// const openingHours = {
//   [weekdays[3]]: {
//     open: 9,
//     close: 18
//   },

//   [weekdays[4]]: {
//     open: 9,
//     close: 18
//   },

//   [weekdays[6]]:{
//     open: 10,
//     close: 14
//   },
// }

// const orderSTI = {
//   Manufac: 'SUBARU',

//   modals: [
//     'WRX', 'STI', 'OUTBACK FOR SHAPE UPS'
//   ],

//   colors: [
//     'World Rally Blue',
//     'Crystal White Pearl',
//     'Ice Silver Metallic',
//     'Pure Red',
//     'WR Blue Pearl',
//     'Lapis Blue Pearl',
//     'Dark Gray Metallic',
//     'Crystal Black Silica',
//   ],

//   // ES6 ENCHANCED OBJECT LITERALS
//   openingHours,


//   orderDinner (res1, res2, res3) {
//     console.log('====================================');
//     console.log(`Here's our choices ${res1}, ${res2}, ${res3}`);
//     console.log('====================================');
//   },


//     order (wMODAL, wCOLOR) {
//         return [
//             this.modals[wMODAL], this.colors[wCOLOR]
//         ]
//     },

//     orderDelivery(wMODAL = 1, mainIndex = 1, address = 'Dover', time = '19:30'){
//         console.log(`Order received! ${this.modals[wMODAL]} in ${this.colors[mainIndex]} will be delivered to ${address} at ${time}`);
//     },

// }
//   console.log("🚀 ~ file: script.js ~ line 1598 ~ openingHours", orderSTI.openingHours)

  // Optional Chaining (?)
  // console.log(orderSTI.openingHours.mon?.open);
  // console.log(orderSTI.openingHours?.mon?.open);

  //EXAMPLE
//   const days = ['Mon' , 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  
//   for (const day of days){
//     // console.log(day);
//     const open = orderSTI.openingHours[day]?.open ?? 'closed'
//     console.log(`On ${day} we ${open}`);
//   }

//   //Methods
// console.log('====================================');
// console.log(orderSTI.modals?.[1]?? "Method does not work!");
// console.log('====================================');

//Arrays
// const user = [
//   {
//     name: 'Mario',
//     email: 'mariojudahhhhh20@gmail.com'
//   }
// ]

// console.log(user[0]?.name ?? "USer Not Found");

//** Looping Objects: Keys, Values, Entries **/

// const weekdays = ['Mon' , 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// // // const days = ['Mon' , 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// const openingHours = {
//   [weekdays[0]]: {
//     open: 9,
//     close: 18
//   },

//   [weekdays[2]]: {
//     open: 9,
//     close: 18
//   },

//   [weekdays[4]]:{
//     open: 10,
//     close: 14
//   },
// }

// //Property NAMES
// const proporties = Object.keys(openingHours)

// let openStr = `We are open on ${proporties.length} Days: `

// for (const day of proporties) {
// openStr += `${day}, `
// }

// console.log('====================================');
// console.log(openStr);
// console.log('====================================');

// //Property VALUES
// const values = Object.values(openingHours)
// console.log('====================================');
// console.log(values);
// console.log('====================================');

// //Entire object
// const enT = Object.entries(openingHours)
// // console.log('====================================');
// // console.log(enT);
// // console.log('====================================');

// for (const [key, {open , close}] of enT) {
//   console.log('====================================');
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
//   console.log('====================================');
// }

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

  //EXAMPLE
//   const days = ['Mon' , 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  
//   for (const day of days){
//     // console.log(day);
//     const open = orderSTI.openingHours[day]?.open ?? 'closed'
//     console.log(`On ${day} we ${open}`);
//   }

////////////////// 1
// for (let gS = 0; gS < game.scored.length; gS++){
//   console.log(`Goal ${gS}: ${game.scored[gS]}`);
// }
// console.log("🚀 ~ file: script.js ~ line 1705 ~ games", game.scored)

////////////////// 2

//// professor solution
// let average = 0
// const oddsValue = Object.values(game.odds)
// console.log("🚀 ~ file: script.js ~ line 1757 ~ Object.values(game.odds)", Object.values(game.odds))
// for (const odd of oddsValue)
//   average += odd
//   average /= oddsValue.length
//   console.log("🚀 ~ file: script.js ~ line 1760 ~ average", average)
// Example 
//Looping-Arrays: The for-loop

// const game2 = [...players1, ...players2]

// for ( const players of game2 ) console.log(players);

// for ( const players of game2.players()){
//   console.log(players);
// }

// console.log([...game2.players]);

// for ( const average of game.odds()){
//   console.log(average);
// }

// let sum = 0
// game.odds.forEach(function(calcAverage) {sum + calcAverage})

// average = sum / game.odds.length
// console.log("🚀 ~ file: script.js ~ line 1761 ~ average", average)
// const keys = Object.keys(game.odds)
// console.log("🚀 ~ file: script.js ~ line 1776 ~ keys", keys)

// let sum = 0
// keys.forEach((key, index) => {
//   // console.log("🚀 ~ file: script.js ~ line 1780 ~ keys.forEach ~ index", index)
//   console.log(`${key}: ${game.odds[key]} = average is ${ game.odds[key] / sum}`);
// })

// let sum = 0
// for ( let num of keys ){
//   console.log("🚀 ~ file: script.js ~ line 1783 ~ num", num)
//   sum += game.odds[keys]
// }

// let aVer = sum / keys.length
// console.log("🚀 ~ file: script.js ~ line 1787 ~ sum", sum)
// console.log("🚀 ~ file: script.js ~ line 1787 ~ keys.length", keys.length)
// console.log("🚀 ~ file: script.js ~ line 1787 ~ aVer", aVer)


////////////////// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      // Odd of victory Bayern Munich: 1.33
      // Odd of draw: 3.25
      // Odd of victory Borrussia Dortmund: 6.5

  //// professor solution
  // for (const [team, odd] of Object.entries(game.odds)){
  //   const teamStr = team === 'x' ? 'Draw ' : `Victory ${game[team]}`
  // console.log("🚀 ~ file: script.js ~ line 1812 ~ team, odd", `Odd of ${teamStr} ${odd}`)
  // }


// const keys = Object.keys(game.odds)
// console.log("🚀 ~ file: script.js ~ line 1776 ~ keys", keys)

// keys.forEach((key, index) => {
//   // console.log("🚀 ~ file: script.js ~ line 1780 ~ keys.forEach ~ index", index)
//   console.log(`Odd of Victory ${game.team1} :${game.odds[key]}`);
// })

//////////////////**SETS**/////////
//UNIQUE SET OF VALUES//

// const orderSet = new Set(['PASTA', 'ALFREDO', 'PIZZA', 'PIZZA'])
// console.log("🚀 ~ file: script.js ~ line 1829 ~ orderSet", orderSet)

// console.log(new Set("SPEED"));
// console.log("🚀 ~ file: script.js ~ line 1832 ~ new Set", orderSet.has("PIZZA"))
// console.log("🚀 ~ file: script.js ~ line 1833 ~ orderSet.has", orderSet.has("Bread Sticks"))

// orderSet.add('Garlic Bread')
// orderSet.delete('PIZZA')

// for ( const order of orderSet ) console.log(order);

// //Example 

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']

// const staffUni = [...new Set(staff)]
// console.log("🚀 ~ file: script.js ~ line 1845 ~ staff", staffUni)


// MAPS *any type of key*
// const rest = new Map()
// rest.set('name', 'Pasta Rasta')
// rest.set(1, 'SOHO,NYC')
// rest.set(2, 'SHIBYUA,JAPAN')
// console.log("🚀 ~ file: script.js ~ line 1852 ~ rest.set(1, 'SOHO,NYC', 2, 'SHIBYUA,JAPAN')", rest.set(1, 'SOHO,NYC', 2, 'SHIBYUA,JAPAN'))

// rest 
// .set('categories', ['Italian', 'Organic'])
// .set('open', 11)
// .set('close', 23)
// .set(true, 'We are open')
// .set(false,'We are close')

// rest.get('name')
// console.log("🚀 ~ file: script.js ~ line 1863 ~ rest.get('name')", rest.get('name'))
// console.log("🚀 ~ file: script.js ~ line 1864 ~ rest.get('true')", rest.get(true))


// const time = 21
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')))
// // console.log("🚀 ~ file: script.js ~ line 1869 ~ rest.get(time > rest.get('open') && time < rest.get('close'))", 
// // rest.get(time > rest.get('open') && time < rest.get('close')))

// console.log(rest.has('categories'));
// rest.set(document.querySelector('h1'), 'Heading')
// rest.delete(2)
// console.log(rest);
// console.log(rest.size);

//Frecodecamp Algorithms - Nested loops
// const arr = [
//   [1, 2], [3, 4], [5, 6]
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr[i].length; j++){
//       product = product * arr[i][j]
//     }
//   }
//   // Only change code above this line
//   return product;
// }

// multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);   

// //** Maps : Iteration **/
// const question = new Map([
//   ['question', 'what is the best food?'], 
//   [1, 'Chinese'],
//   [2, 'Mexican'],
//   [3, 'Italian'],
//   ['correct', 3],
//   [true, 'Correct!!'],
//   [false, 'Incorrect!!']
// ])
// console.log(question);

//Covert objects to map
// const hoursMap = new Map(Object.entries(openingHours))
// console.log(hoursMap);

//Quiz App
// console.log(question.get('question'));

// for (const [key, value] of question){
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt("Your answer please!"))
// console.log(answer);

// //** ALmost correct solution for correct answer prompt**/
// // if( answer === 3 ){
// //   alert(question.true)
// // } else {
// //   alert(question.false)
// // }

// //Correct solution
// console.log(question.get(question.get('correct') === answer));

//** Convert Map to Array **/
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);


//** Data Strcuturcs **/
// SOURCES OF DATA
//   1     From the program itself:Data written directly in source code(e.g. status messages)
//   2   From the UI:Data input from the user or data written in DOM(e.g tasks in todo app)
//   3   From external sources:Data fetched for example from web API(e.g. recipe objects)3
//   Application
//   Programming
//   Interface


// ARRAYS
// tasks=['Code','Eat','Code'];
// //["Code","Eat","Code"]
// Use when you need ordered
// list of values(might contain
// duplicates)
// Use when you need to
// manipulate data

//   VS.SETS
//   tasks=new Set(['Code','Eat','Code']);
//                  //{"Code","Eat"}
//   Use when you need to work
//   with unique values
//   Use when high-performance
//   is really important
//   Use to remove duplicates
//   from arrays


// OBJECTS
// task={
// task:'Code',
// date:'today',
// repeat:true
// };
// More"traditional"key/value
// store("abused"objects)
// Easier to write and access
// values with.and[]
// Use when you need to
// include functions(methods)
// Use when working with
// JSON(can convert to map)
             
// VS.MAPS
// task=new Map([
// ['task','Code'],
// ['date','today'],
// [false,'Start coding!']
// ]);
// Better performance
// Keys can have any data type
//  Easy to iterate
//  Easy to compute size
//  Use when you simply need
// to map key to values
//  Use when you need keys
//  that are not strings

/** 
1. Create an array'events'of the different game
events that happened(no duplicates)
2. After the game has finished,is was found that the
yellow card from minute 64 was unfair.So remove this
event from the game events log.
3. Print the following string to the console:"An
event happened,on average,every9minutes"(keep in
mind thatagame has 90 minutes)
4. Loop over the events and log them to the console,
marking whether it's in the first half or second half
(after 45 min)of the game,like this:
       [FIRST HALF]17:GOAL
GOOD LUCK
**/

const gameEvents = new Map([
[17, 'GOAL'],
[36,'Substitution'],
[47,'GOAL'],
[61,'Substitution'],
[64,'Yellow card'],
[69,'Red card'],
[70,'Substitution'],
[72,'Substitution'],
[76,'GOAL'],
[80,'GOAL'],
[92,'Yellow card'],
]);


// 1.
const events = [... new Set(gameEvents)]
console.log('====================================');
console.log(events);
console.log('====================================');

// 2.
gameEvents.delete(64)
console.log(gameEvents);

// 3.
setInterval(function(){ 
	console.log("An event happened on average every 9minutes");
}, 5400);//run this thang every 2 seconds


