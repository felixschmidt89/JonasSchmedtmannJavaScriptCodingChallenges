/**
 * Coding Challenge #1
 * Mark and John are trying to compare their BMI (Body Mass Index), which is
 * calculated using the formula:
 * BMI = mass / height ** 2 = mass / (height * height) (mass in kg
 * and height in meter).
 * Your tasks:
 * 1. Store Mark's and John's mass and height in variables
 * 2. Calculate both their BMIs using the formula (you can even implement both
 * versions)
 * 3. Create a Boolean variable 'markHigherBMI' containing information about
 * whether Mark has a higher BMI than John.
 * Test data:
 * § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
 * m tall.
 * § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
 * m tall.
 *
 * @format
 */

// Task 1

const heightMark = 1.69;
const heightJohn = 1.95;

const weightMark = 78;
const weightJohn = 92;

// Task 2

const formula1BMIMark = weightMark / heightMark ** 2;
const formula2BMIMark = weightMark / (heightMark * heightMark);
console.log(formula1BMIMark);
console.log(formula2BMIMark);

const formula1BMIJohn = weightJohn / heightJohn ** 2;
const formula2BMIJohn = weightJohn / (heightJohn * heightJohn);
console.log(formula1BMIJohn);
console.log(formula2BMIJohn);

// Task 3

const markHigherBMI = formula1BMIMark > formula1BMIJohn;
console.log(markHigherBMI);
