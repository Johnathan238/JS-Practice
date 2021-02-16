// // //Truthy and falsy values and equality operators

// let height;
// height = 23

// if (height || height === 0) {
//     console.log('Variable is defined');

// } else {
//     console.log('Variable is Not Defined');

// }

// // // Equality operators
// if (height == '23'){
//     console.log('This is corcian');
// } else {
//     console.log('Not corcian');
// }

// const johnTeam = [89, 120, 103]
// const mikeTeam = [116, 94, 123]

// if (johnTeam > mikeTeam){
//     console.log('The winner is Johns team with the winning numbers ' +  johnTeam);
// } else if(mikeTeam > johnTeam) {
//     console.log('The winner is Mike  team with the winning numbers ' +  mikeTeam);
// }

// const scoreJohn = (89 + 120 + 103) /3;
// const scoreMike = (116 + 94 + 123) /3;
// const scoreMary = (97 + 134 + 105) /3;
// console.log(scoreJohn, scoreMike, scoreMary);

// if (scoreJohn > scoreMike && scoreJohn > scoreMary){
//     console.log('John\'s team wins with ' + scoreJohn + ' points ');
// } else if (scoreMike > scoreJohn && scoreMike > scoreMary){
//     console.log('Mike\'s team wins with ' + scoreMike + ' points ');
// } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//     console.log('Mary\'s team wins with ' + scoreMary + ' points ');
// } else {
//     console.log('It\'s a draw BOII !!!!!');
// }

// // //Functions !!!!
// function calculateAge (birthYear){
//     return 2020 - birthYear;
// }

// // const ageJohn = calculateAge(1990);
// // const ageJane = calculateAge(1984);
// // const ageJosh = calculateAge(1998);
// // console.log(ageJohn, ageJane, ageJosh);

// function yearsForRetirement(year, firstName){
//     const age = calculateAge(year)
//     const retirement = 65 - age;
//     console.log(firstName + ' retires in ' + retirement + ' years. ');
// }

// yearsForRetirement(1998, 'Shazel');

// // //Functions Statements and Expressions

// // //Function declaration
// function whatJob(job, firstName){}

// // //Function Expression
// const whatJob = function(job, firstName){
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids '
//         case 'developer':
//             return firstName + ' Makes games with C++ '
//         case 'driver':
//             return firstName + ' Drives UPS truck '
//         default:
//             return firstName + ' is lazy you know fam, boring tings'
//     }
// }

// console.log(whatJob('lazy', 'Sean'));

// // //Arrays

// // // Initialize new array
// const names = ['John', 'Sean', 'Mike'];
// const years = new Array(1990, 1969, 1948)

// console.log(names);
// console.log(names.length);

// // Mutate array data
// names[1] = 'Mike';
// names[5] = 'Jane'
// console.log(names);

// // // Different data types
// const john = ['John' , 'Sean', 'Mike', 'Steve', 1990, 'Developer', false];

// john.push('pink');
// john.unshift('Mr\.');
// console.log(john);

// john.pop() //removes the last element
// john.pop()
// john.pop()
// john.shift() //removes the first element
// console.log(john);

// console.log(john.indexOf(23));

// const isDesigner = john.indexOf('designer') === -1 ? 'John IS NOT A DESIGNER' : 'John IS A DESIGNER';
// console.log(isDesigner);

// const johnOneRestaurant = 124;
// const johnTwoRestaurant = 48;
// const johnThreeRestaurant = 268;

// function tipWaiter() {
//   if (johnOneRestaurant > 50 && johnOneRestaurant < 200) {
//     console.log(johnOneRestaurant * 0.15);
//   }
//   if (johnTwoRestaurant < 50) {
//     console.log(johnTwoRestaurant * 0.2);
//   }
//   if (johnThreeRestaurant > 200) {
//     console.log(johnThreeRestaurant * 0.1);
//   }
// }
// tipWaiter();

// function tipCalculator(bill) {
//     let percentage;
//     if(bill < 50){
//         percentage = .2;
//     } else if (bill >= 50 && bill <= 200){
//         percentage = .15
//     } else {
//         percentage = .1
//     }
//     return percentage * bill;
// }

// const bills = [124, 48, 268]
// const tips = [tipCalculator(bills[0]),
//               tipCalculator(bills[1]),
//               tipCalculator(bills[2])];

// const finalBills = [bills[0] + tips[0],
//                     bills[1] + tips[1],
//                     bills[2] + tips[2]];

// console.log(tips, finalBills);

// // // Objects & Properties

// // Object literal !!

// const sean = {
//     firstName:  'Sean',
//     lastName: 'Rock',
//     birthYear: '2002',
//     job: 'Game developer',
//     hobbie: 'HE A LAZY BITCH'
// }

// console.log(sean);

// console.log(sean.firstName, sean.lastName, sean.hobbie);
// const x = 'birthYear'
// console.log(sean[x]);

// // // new Object syntax
// const shazel = new Object()
// shazel.firstName = 'Shazel'
// shazel.lastName = 'Umana'
// shazel.job = 'teacher'
// console.log(shazel);

// // Objects & Methods

// const sean = {
//     firstName:  'Sean',
//     lastName: 'Rock',
//     birthYear: '2002',
//     job: 'Game developer',
//     hobbie: 'HE A LAZY BITCH',
//     calcAge: function() {
//         this.age = 2020 - this.birthYear // better cleaner way to use "this."
//         // return 2020 - this.birthYear // this.birthYear mean sean.birthYear
//     }
// };

// sean.calcAge();
// console.log(sean);

// console.log(sean.calcAge());

// const john = {
//     firstName: "John",
//     lastName: "PLuto",
//     mass: 54,
//     height: 5/8,
//     calcBMI: function () {
//         this.bMI = this.mass / (this.height)*2
//         this.bMI
//     }
// }

// john.calcBMI();
// console.log(john);

// // console.log(john.calcBMI());

// const sean = {
//     firstName: "Sean",
//     lastName: "Rock",
//     mass: 68,
//     height: 5/9,
//     calcBMI: function () {
//         this.bMI = this.mass / (this.height)*2
//         return this.bMI
//     }
// }

// sean.calcBMI();
// console.log(sean);

// if (john.calcBMI > sean.calcBMI) {
//     console.log(john.firstName + ' has a higher BMI of ' + john.bMI);
// } else if ( sean.calcBMI > john.calcBMI) {
//     console.log(sean.firstName + ' has a higher BMI of ' + sean.bMI);
// } else {
//     console.log(' It/s  a tie FAM! ALLOW IT');
// }

// // // Loops and iteration

// // for loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// // i = 0, 0 < 10, log i to the console, i++
// const john = ['Johnathan', 'sean', 'shazel', 2000, 1600]
// for ( let i = 0; i < john.length; i++){
//     console.log(john[i]);
// }

// // // while loop
// let i = 0
// while (i < john.length){
//     console.log(john[i]);
//     i++;
// }

// // // continue and break statement
// const john = ["Johnathan", "sean", "shazel", 2000, 1600];
// // for ( let i = 0; i < john.length; i++){
// //     if (typeof john[i] !== 'string') continue;
// //     console.log(john[i]);
// // }

// // for ( let i = 0; i < john.length; i++){
// //     if (typeof john[i] !== 'string') break;
// //     console.log(john[i]);
// // }

// // // looping backwards
// for (let i = john.length - 1; i >= 0; i--) {
//   console.log(john[i]);
// }

// const johnRestaurant = {
//   bill1: 124,
//   bill2: 48,
//   bill3: 268,
//   bill4: 180,
//   bill5: 42,
//   calcTip: function () {
//     for (let i = 0; i < johnRestaurant.length; i++) {
//       if (johnRestaurant < 50) {
//         console.log(johnRestaurant * 0.2);
//       } else if (johnRestaurant >= 50 && johnRestaurant <= 200) {
//         console.log(johnRestaurant * 0.15);
//       } else {
//         console.log(johnRestaurant * 0.1);
//       }
//     }
//   }
// };

// johnRestaurant.calcTip()
// console.log(johnRestaurant);
 


// const Johnathan = {
//     bills: [124, 48, 268, 180, 42],
//     calcTips: function() {
//         this.tips = [];
//         this.finalValues = [];

//         for (let i = 0; i < this.bills.length; i++){
//             // Determine percentage based on tipping rules
//             let percentage;
//             let bill = this.bills[i];

//             if (bill < 50) {
//                 percentage = .2
//             } else if (bill >= 50 && bill < 200) {
//                 percentage = .15
//             } else {
//                 percentage = .1
//             }

//             // Add results to the corresponing arrays
//             this.tips[i] = bill * percentage
//             this.finalValues[i] = bill + bill * percentage
//         }
//     }
// }

// Johnathan.calcTips();
// console.log(Johnathan);

// !Lecture: Hoisting!

// calculatorAge(1998);

// function calculatorAge(year){
//     console.log(2020 - year);
// }

// // !Function expression!

// const retirement = function(year) {
//     console.log(65- (2020-year));
// }

// retirement(2000)

// console.log(age);
const age = 20;

function foo() {
    const age = 29;
    console.log(age);
}

foo()
console.log(age);