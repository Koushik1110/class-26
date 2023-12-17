"use strict";

//converting numbers

//decimal to binary, octal, hexadecimal
// const decimalNumber = 45;
// const binaryNumber = decimalNumber.toString(2);
// const octalNumber = decimalNumber.toString(8);
// const hexadecimalNumber = decimalNumber.toString(16);
//console.log(hexadecimalNumber);

//binary to decimal
// const binaryStr = "101010";
// const decimalOfBinaryStr = parseInt(binaryStr, 2);
//console.log(decimalOfBinaryStr);

//octal to decimal
// const octalStr = "45";
// const decimalOfOctalStr = parseInt(octalStr, 8);
// console.log(decimalOfOctalStr);

//number .isInteger()
// const num = 9.23;

// if (Number.isInteger(num)) {
//   console.log(`${num} is an integer.`);
// } else {
//   console.log(`${num} is not an integer.`);
// }

//isNan()
// const str ="9";

// if (isNaN(str)) {
//   console.log(`${str} is not a number.`);
// } else {
//   console.log(`${str} is a number.`);
// }

//parseInt()
// const measurement = "2.229lb";
// const measurementNumber = parseInt(measurement);
// console.log(measurementNumber);

//math
//2^9
// console.log(Math.pow(2,9));
// console.log(Math.sqrt(25));
// console.log(Math.abs(8));
// const floatNum = 9.99999;
// console.log(Math.round
//   (floatNum));
// console.log(Math.ceil(floatNum));
// console.log(Math.floor(floatNum));
// console.log(Math.trunc(floatNum));

//date

const currentDate = new Date();

// console.log(currentDate.getFullYear());
// console.log(currentDate.getMonth());
// console.log(currentDate.getDate());
// console.log(currentDate.getDay());
// console.log(currentDate.getHours());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getMilliseconds());

// const formattedDate = currentDate.toLocaleDateString("bn-BD", {
//   year: "numeric",
//   month: "long",
//   day: "2-digit",
// });

// console.log(formattedDate);
// console.log(new Date().getFullYear() - 1990);

// const presentDate = new Date();
// const futureDate = new Date(presentDate.getTime() + 24 * 60 * 60 * 1000);

// console.log(futureDate);

// const pastDate = new Date(presentDate.getTime() - 24 * 60 * 60 * 1000);
// console.log(pastDate);

// const birthDate = new Date("03/13/1973").getTime();
// const presentDate = new Date().getTime();
// console.log((presentDate - birthDate)/ (365 * 24 * 60 * 60 * 1000));

//setTimeout()
// function greet() {
//   console.log("What are you looking at.");
// }

// console.log("surprise");
// setTimeout(greet, 5000); //5sec
// console.log("Just kidding.");

// setTimeout(() => {
//   const a = 2;
//   const b = 4;

//   const c = a + b;

//   console.log(c);
// }, 2000);

//setInterval()
// const myInterval = setInterval(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 5000);

// setTimeout(() => {
//   clearInterval(myInterval)
// }, 10000)

//Lets build a clock

// const clock = document.querySelector(".clock");

// function buildClock() {
//   const myInterval = setInterval(() => {
//     const time = new Date().toLocaleTimeString("bn-bd", {
//       dayPeriod: "long",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//     });
//     clock.textContent = time;
//   }, 1000);

//   setTimeout(()=> {
//     clearInterval(myInterval)
//     clock.textContent = "Your time has come."
//   }, 10000 )
// }

// buildClock()