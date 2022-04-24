// const firstNum = prompt('please enter a number');
// const secondNum = prompt('please enter a second number');

// alert(+firstNum + +secondNum);

// asfasf

// asfsafsa

// asfasfsa

// asfsafafaf

// new calculation

// const firstNum2 = prompt("please enter a number");
// const secondNum2 = prompt("please enter a second number");

// alert(+firstNum2 + +secondNum2);

// hoisting  - var/function

// functions are first class citizens in js

// acceptTwoNumbersAndAdd('before 1');

// acceptTwoNumbersAndAdd('before 2');

// // parameters the function accepting goes inside brackets
// function acceptTwoNumbersAndAdd(when) {
//   console.log(when);
//   const firstNum = prompt("please enter a number");
//   const secondNum = prompt("please enter a second number");
//   alert(+firstNum + +secondNum);
// }

// acceptTwoNumbersAndAdd('after 1');

// acceptTwoNumbersAndAdd('after 2');

// function sumTwoNumbers(a, b) {
//     return a + b;
// }

// const result = sumTwoNumbers(13, 34);

// console.log(result);

// function waveToUser(userName) {
//     alert(`hey, you, out there in the dark ${userName}`);
//     //
//     //
//     //
//     //
// }

// const returnedValue = waveToUser("Abbas");
// console.log(returnedValue);

// const returnedValue2 = waveToUser("Gulsum");

// console.log(returnedValue2);

// function sumNumbers() {

//     console.log(arguments);
//     let sum = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }

//     return sum;
// }

// const result = sumNumbers(1, 2, 3);
// const result2 = sumNumbers(1, 2, 3, 4, 10, 20, 30);
// const result3 = sumNumbers();

// console.log(result);
// console.log(result2);
// console.log(result3);

// function sum(a, b) {
//     if (typeof a == 'undefined' || typeof b == 'undefined') {
//         throw new Error('You did not provide a number.');
//     }
//     return a + b;
// }

// try {
//     sum();
// } catch (err) {
//     console.log(err);
// }

// try {
//   console.log(sum(1, 3));
// } catch (err) {
//   console.log(err);
// }

// console.log('reading code ')

// function sum(a = 5, b = 5) {
//     return a + b;
// }

// console.log(sum());
// console.log(sum(11, 12));
// console.log(sum(null, null));
// console.log(sum(false, false));
// console.log(sum("", ""));
// console.log(sum("a", "b"));
// console.log(sum(0, 0));

// const user = {
//   firstName: "Mina",
//   lastName: "Mustafayeva",
//   age: 26,
//   sayHello: function (toWhomFirstName, toWhomLastName) {
//     return `Hey ${toWhomFirstName} ${toWhomLastName} my name is ${this.firstName} ${this.lastName}. I studied at ${this.education.university}`;
//   },
//   education: {
//     university: "ASOIU",
//     speciality: "Computer Science",
//   },
// };

// const user2 = {
//   firstName: "Agil",
//   lastName: "Atakishiyev",
//   education: {
//     university: "ASOIU",
//     speciality: "Computer Science",
//   },
// };

// const user3 = {
//   firstName: "Zaman",
//   lastName: "Safarov",

//   education: {
//     university: "ATU",
//     speciality: "Computer Science",
//   },
// };

// alert(user.sayHello("Gulsum", "Bayramova"));
// alert(user.sayHello.call(user2, "Hasan", "Aliyev"));
// alert(user.sayHello.apply(user2, ["Hasan", "Aliyev"]));

// const bound1 = user.sayHello.bind(user, "Gulsum", "Bayramova");
// const bound2 = user.sayHello.bind(user2, "Samir", "Mammadov");
// const bound3 = user.sayHello.bind(user3, "Mina", "Mustafayeva");

// function findMin() {
//     let minimum = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//         if (arguments[i] < minimum) {
//             minimum = arguments[i];
//         }
//     }
//     return minimum;
// }

// function findMax() {
//     let maximum = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//       if (arguments[i] > maximum) {
//         maximum = arguments[i];
//       }
//     }
//     return maximum;
// }

// console.log(findMax(3, 100, -300, 40, 33)); // 100
// console.log(findMin(3, 100, -300, 40, 33)); // -300
// console.log(findMax(3, 100, -300, 40, 32, 54, 101, 200, 453)); // 453
// console.log(findMin(3, 100)); // 3

// function loopArrayAndMultiplyByTwo(array) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(array[i] * 2);
//     }

//     return newArray;
// }

// function loopArrayAndMultiplyByFive(array) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i] * 5);
//   }

//   return newArray;
// }

// const result = loopArrayAndMultiplyByTwo(numbers);
// const result2 = loopArrayAndMultiplyByFive(numbers);

// const numbers = [1, 3, 5, 10, 20, 30, 40];

// function loopArray(array, callBackFunction) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     newArray.push(callBackFunction(array[i]));
//   }

//   return newArray;
// }

// function multiplyByFive(number) {
//     return number * 5;
// }

// function multiplyByThree(number) {
//     return number * 3;
// }

// console.log(loopArray(numbers, multiplyByFive));
// in this case `loopArray` is "Higher Order Function", and `multiplyByFive` is a "Callback Function"
// console.log(loopArray(numbers, multiplyByThree));
// in this case `loopArray` is "Higher Order Function", and `multiplyByThree` is a "Callback Function"
// console.log(loopArray(numbers, (item) => item * 2));
// console.log(loopArray(numbers, (item) => item / 2));

// Function Declarations(Regular Functions) vs Function Expression

// const myFunc = () => {
//     console.log(arguments);
// }

// const user = {
//     firstname: 'Agil',
//     lastname: 'Atakishiyev',
//     getLastname: function () {
//       console.log(this);
//     },
//     getFirstname: () => {
//       console.log(this);
//     },
// }

// user.getFirstname();
// user.getLastname();

// myFunc(1,2,3,4);

/* 
    Differences between Regular functions and Function Expressions 
        1. Function Expressions are not hoisted
        2. `arguments` keyword is not available inside function expressions
        3. `this` keyword behaves differently in function expressions and regular functions 
*/

// function myFunction(...params) {
//     console.log(params);
// }

// const myArrowFunction = (...params) => {
//   console.log(params); //[1, 2, 3, 4, 5, 6]
// }

// myFunction(1, 2, 3, 4, 5, 6);
// myArrowFunction(1, 2, 3, 4, 5, 6);

// const employee = {
//   id: "123214F",
//   firstname: "Farhad",
//   lastname: "Shirinli",
//   age: 30,
//   position: "Policeman",
// };

// const employee1 = {
//   id: "12FE345",
//   firstname: "Samir",
//   lastname: "Mammadov",
//   age: 25,
//   position: "Business Analyst",
// };

// Object destructuring
// const {
//   id: idOfFarhad,
//   firstname: firstnameOfFarhad,
//   lastname: lastnameOfFarhad,
//   age: ageOfFarhad,
//   position: positionOfFarhad,
// } = employee;
// const {
//   id: idOfSamir,
//   firstname: firstnameOfSamir,
//   lastname: lastnameOfSamir,
//   age: ageOfSamir,
//   position: positionOfSamir,
// } = employee1;
// console.log(idOfFarhad, firstnameOfFarhad, lastnameOfFarhad, ageOfFarhad, positionOfFarhad);

// function displayUserProperties({ id, firstname, lastname, age, position }) {
//   console.log(id);
//   console.log(firstname);
//   console.log(lastname);
//   console.log(position);
//   console.log(age);
//   console.log("-----------");
// }

// displayUserProperties(employee);
// displayUserProperties(employee1);


// const students = ["SamiR", "Farhad", "Zaman", "Abbas", "SamiD", "Mina", "Rashad", "Nariman", "Ali", "Ramin", "Hasan"];
// 
// const firstStudent = students[0];
// const [firstStudent, secondStudent, thirdStudent, ...qalanUshaqlar] = students;

// console.log("yer tutanlar: ", firstStudent, secondStudent, thirdStudent);
// console.log("yer tutmayanlar: ", qalanUshaqlar);
// console.log("butun students: ", students);

// function myFunction(...rest) {
    // console.log(a, b, c);
    // console.log(rest);
// }

// myFunction(3, 4, 5, 6, 7, 8, 9, 10);


