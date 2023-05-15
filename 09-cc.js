/**
 * Developer Skills & Editor Setup
 *
 * Coding Challenge #1
 * Given an array of forecasted maximum temperatures, the thermometer displays a
 * string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
 * days ... 21oC in 2 days ... 23oC in 3 days ..."
 * Your tasks:
 * 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
 * string like the above to the console. Try it with both test datasets.
 * 2. Use the problem-solving framework: Understand the problem and break it up
 * into sub-problems!
 * Test data:
 * § Data 1: [17, 21, 23]
 * § Data 2: [12, 5, -5, 0, 4]
 * GOOD LUCK �
 *
 * @format
 */

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let days = [];
  let messages = [];
  for (let i = 0; i < arr.length; i++) {
    days.push(i + 1);
    messages.push(`${arr[i]}°C in ${days[i]} days...`);
  }
  console.log(`... ` + messages.join(" "));
};

printForecast(arr1);
printForecast(arr2);
