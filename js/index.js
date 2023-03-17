var oldUse = "try not to use it!";

let newVariableChange = "I can be changed";

const myValueWillNotChange = "I cannot be changed";

console.log("oldUse: ", oldUse);

newVariableChange = 10;
console.log("NewVariableChange: ", newVariableChange);

console.log("myValueWillNotChange: ", myValueWillNotChange);

/* to run javascript go to run -> run without debugging and then use node.js. 
 you can also just press ctr + F5 to run this */

//Boolean
let myBoolean = false;

let myString = "This is a text! I can even put 24601 numbers in here!";

let myBigNumber = 3000n; //n here indicates it's a big number. you don't need them, u just gotta know they exist.

let myNull = null;

let myArray = [1, 2, "maybe word", false, null, "something else"];

let myObject = {
  cohortName: "Savory",
  amountStudents: 14,
};

const isANumber = "1";
const amINumber = 1;

let suma = isANumber + amINumber;
console.log("Suma: ", suma);

console.log("Type of suma:", typeof suma); //to check the type

let anotherSuma = parseInt(isANumber) + amINumber; // pareseInto to change the string (numerical!) into a number

let nunum = 4 ** 2;
console.log(nunum);
