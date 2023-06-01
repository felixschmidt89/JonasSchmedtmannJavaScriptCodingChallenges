/** @format */

"use strict";

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age} born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = "Steve";
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = "NEW OUTPUT";
    }
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "Felix";
calcAge(1989);
