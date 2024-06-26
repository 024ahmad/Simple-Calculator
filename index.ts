#! /usr/bin/env node

import inquirer from "inquirer";

console.log ("Welcome to my Calculator")

const answer = await inquirer.prompt([
  { message: "Enter Your First Number", type: "number", name: "firstNumber" },
  { message: "Enter Your Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the Operators to perform Operation",
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction","Multiplication","Division","Modulus","Exponentiation"]
  },
]);

if (answer.operator === "Addition") {
    console.log (answer.firstNumber + answer.secondNumber)
} else if (answer.operator === "Subtraction") {
    console.log (answer.firstNumber - answer.secondNumber)
} else if (answer.operator === "Multiplication") {
    console.log (answer.firstNumber * answer.secondNumber)
} else if (answer.operator === "Division") {
    console.log (answer.firstNumber / answer.secondNumber)
} else if (answer.operator === "Modulus") {
    console.log (answer.firstNumber % answer.secondNumber)
} else if (answer.operator === "Exponentiation") {
    console.log (answer.firstNumber ** answer.secondNumber)
} else {
    console.log ("Please Select Valid Operator")
}


console.log ("The End")