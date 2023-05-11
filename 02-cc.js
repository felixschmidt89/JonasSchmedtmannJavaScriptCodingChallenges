/**
 * Use the BMI example from Challenge #1, and the code you already wrote, and
 * improve it.
 * Your tasks:
 * 1. Print a nice output to the console, saying who has the higher BMI. The message
 * is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
 * 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
 * BMI (28.3) is higher than John's (23.9)!"
 * Hint: Use an if/else statement �
 *
 * @format
 */

const heightMark = 1.69;
const heightJohn = 1.95;

const weightMark = 78;
const weightJohn = 92;

const formula1BMIMark = weightMark / heightMark ** 2;
const formula2BMIMark = weightMark / (heightMark * heightMark);

const formula1BMIJohn = weightJohn / heightJohn ** 2;
const formula2BMIJohn = weightJohn / (heightJohn * heightJohn);

const markHigherBMI = formula1BMIMark > formula1BMIJohn;

// 1

if (formula1BMIMark > formula1BMIJohn) {
  console.log(
    `Mark's BMI(${formula1BMIMark.toFixed(
      2
    )}) is higher than John's (${formula1BMIJohn.toFixed(2)})`
  );
} else {
  console.log(
    `John's BMI(${formula1BMIJohn.toFixed(
      2
    )}) is higher than Mark's (${formula1BMIMark.toFixed(2)})`
  );
}
