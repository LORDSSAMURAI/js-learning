let score = null

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)

//Notes//
// "33" => 33 (number)
// "33abc" => NAN (Not A Number) It's type is Number
// true => 1, false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean (isLoggedIn)
//console.log(booleanIsLoggedIn)

//Notes//
// 1 => true, 0=> false
// "" (<- empty string) => false
// "Pankaj" (<- added a value) => true

let someNumber = 33
let stringNumber = Number(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

/*** OPERATIONS ***/

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%2);

let str1 = "Hello"
let str2 = " Pankaj Payeng"

let str3 = str1 + str2
console.log(str3)

// Wrong Way's are below down //
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// Right Way is below down //
// console.log( (2 + 3) * 3 % 4);

// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
console.log(gameCounter);