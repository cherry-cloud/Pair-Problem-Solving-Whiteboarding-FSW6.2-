// Joseph P. Pasaoa & Briahana Maugé
//

/* WHITEBOARDED SOLUTION */
const findRepeated = (arr) => {
  let newArr = [];
  let repeatsArr = [];
  for (let num of arr) {
    if (newArr.includes(num) === false) {
      newArr.push(num);
    } else if (repeatsArr.includes(num) === false) {
      repeatsArr.push(num);
    }
  }
  return repeatsArr;
}

let input = [1, 4, -2, -9, 2, -2, 1, 10, 4];
console.log(findRepeated(input));