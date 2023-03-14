// let name = "Max";
// let age = 21;
// let hasHobbies = true;

// const summarizeUser = (userName, userAge, userHasHobbies) => {
//   return (
//     "Name is" + userName + " Age is" + userAge + " and Hobbies:" + userHasHobbies
//   );
// };

// // The function created on top is the same as the one down

// function summarizeUser(userName, userAge, userHasHobbies) {
//     return(
//         "Name is" + userName + " Age is" + userAge + " and Hobbies:" + userHasHobbies
//     );
// };

// // or this one

// const summarizeUser = (userName, userAge, userHasHobbies) => {
//     return(
//         "Name is" + userName + " Age is" + userAge + " and Hobbies:" + userHasHobbies
//     );
// };
// // end

// // this particular function is the same as the one down but in shorter version

// const sum = (a, b) => a + b; // shorter version

// //this is the same as

// function sum(a, b) {
//     return a + b;
// }

// // or the same as

// const sum = (a, b) => {
//     return a + b;
// }
// //end

// // In case we have one argument there is no need of adding the brackets

// const sum = a => a + 2; // In this case we removed the brackets because of the single argument we have that is "a"

// console.log(summarizeUser(name, age, hasHobbies));


// // Object creation in javaScript (the main aim of an object is to allow us to group data together)

// const person = {
//     name: 'Max',
//     age: 29,
//     greet() {
//         console.log('Hi I am' + this.name)
//     }
// };

// person.greet;

// //Arrays

//const hobbies =  ['blue', 'yellow']

// // using for loop in js

// for (let hobby of hobbies) {
//     console.log(hobby);
// }

// The use of the map function(this will allow you to transform an array by generating a new array )

// Let's say we want to modify the something into the  "const hobbies =  ['blue', 'yellow']" array

// console .log(hobbies.map(hobby => "Hobby:" + hobby));
// console.log(hobbies)

// // For my own understanging the map() fuction is called when we want to modify data in an array or list 

// //end 

// the push() which allow us to add a new element into an array

// hobbies.push('black')
// // NOTICE!! : this is not changing the value of the pre-existing array. Instead, it will create a new array containing the previous array data plus the new one recently added

// the spread operator denoted by "..." (the aim of that operator is to fecth the data in the array we want to copy then put then in a new array)

// const copyArray = [...hobbies]
// console.log(copyArray)

// // this operator is basically used to make a copy of array , lists or objects

// //end

// the rest operator also denoted by "..." is basically used in function argument declaration (once this is declared as the argument, you can return as namy arguments as you want without having to declare them)

// const toArray = (...args) => {
//     return args;
// }

// console.log(toArray(1, 2, 3, 4, 5, 6, 7))
// console.log(toArray(1, 2, 3, 4))

// //Using the same function name the first one will print: [1, 2, 3, 4, 5, 6, 7] and the second one will print: [1, 2, 3, 4]
// //end

// const person = {
//     name: 'Max',
//     age: 29,
//     greet() {
//         console.log('Hi I am' + this.name)
//     }
// };

// // Destructuring is  a particular function allow us to grab a specific data in an object . It is also usable in arrays
// const printName = ({name}) => {
//     console.log(name);
// };

// printName(person);

// //Alternativelly we can also do this

// const {name, age} = person;

// console.log(name, age)
