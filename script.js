'use strict';

/** Strict Mode **/

// let hasDriversLicense = false
// const passTest = true

// if (passTest) hasDriversLicense = true
// if (hasDriversLicense) console.log("I'm driving today!");

/** Functions **/

function marioJudah() {
    console.log("MARIOOOOO JUDAHHHHH");
}

// calling / running / invoking function
marioJudah()

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
//   const mJ = prompt("You Fuck With MARIOOOOO JUDAHHHHH 👹🎸☾?")
//   const marioJudah = mJ === 'yes' || mJ === 'YES' || mJ === 'Yes' ? alert(`I FUCKED WITH YOU CUZ YOU SAID ${mJ}🎸`) : alert(`I DONT FUCK WITH YOU ☾`)

//   return marioJudah
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
//   const chickenWingsP = cutPieces(chickenWings)
//   const generalTossChickenP = cutPieces(generalTossChicken)

//     const orderPlease = `I would like ${chickenWingsP} orders of Chicken Wings & ${generalTossChickenP} orders of General Toss Chicken. Thank You! ` 

//     return orderPlease
// }

// // idk(1,1)

// console.log(idk(2, 5))

// const hMFF = favoriteFood => favoriteFood + 1; // Arrow Function

// const nFF = (favoriteFood) => {
//   const hMFF =  ++favoriteFood;
//   return hMFF
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

/* Coding Challenge Function */

const calcAverage = (avgScores) => {
    const avgDScores = (44 + 23 + 71) / 3
    const avgKScores = (65 + 54 + 49) / 3

    return (avgDScores, avgKScores)
}

const checkWinner = function (avgScores) {
    
}