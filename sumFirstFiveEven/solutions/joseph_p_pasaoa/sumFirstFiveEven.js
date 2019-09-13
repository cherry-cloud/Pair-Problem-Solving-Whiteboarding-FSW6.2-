// Joseph P. Pasaoa with Briahana Maugé
//

/* FINAL SOLUTION */
const sumFirstFiveEven = (array) => {
  let output = 0;
  let evensAdded = 0;
  for (let i = 0; evensAdded < 5; i++) {
    if (input[i] % 2 === 0) {
      output += input[i];
      evensAdded += 1;
    }
  }
  return output;
}

/* FIRST SOLUTION DURING WHITEBOARDING
const sumFirstFiveEven2 = (array) => {
  let evens = [];
  for (let i = 0; evens.length < 5; i++) {
    if (input[i] % 2 === 0) {
      evens.push(input[i]);
    }
  }
  return evens.reduce( (total, current) => {
      return total += current;
  } );
}
*/

let input = [3,7,-3,2,9,4,8,10,3,9,4,9,8,6,-2];

console.log(sumFirstFiveEven(input));
console.log(sumFirstFiveEven2(input));
