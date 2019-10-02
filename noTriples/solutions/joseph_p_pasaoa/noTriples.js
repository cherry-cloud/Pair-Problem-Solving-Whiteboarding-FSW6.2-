// Joseph P. Pasaoa & Johanne Enama
//

/* REFACTORED */
const noTriples = (arr) => {
  let smallArr = [arr[0], arr[1], arr[2]];
  for (let i = 3; i < arr.length; i++) {
    console.log(smallArr);
    if (smallArr[0] === smallArr [1] && smallArr[0] === smallArr[2]) {
      return false;
    } else {
      smallArr.shift();
      smallArr.push(arr[i]);
    }
  }
  return true;
}

/* ORIGINAL WHITEBOARDED
const noTriples = (arr) => {
  let inputArr = arr;
  let smallArr = [arr[0], arr[1], arr[2]];
  for (let i = 3; i < arr.length; i++) {
    if (smallArr[0] === smallArr [1] && smallArr[0] === smallArr[2]) {
      return false;
    } else {
      smallArr.shift();
      smallArr.push(inputArr[i]);
    }
  }
  return true;
}
*/

/* BEST ANSWER I'VE SEEN IMO (author ELISANDRA CARDONA)
const noTriples = (arr) => {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i+1] && arr[i] === arr[i+2]) {
      return false;
    }
  }
  return true;
}
*/

console.log(noTriples([1,1,2,2,1]));
console.log(noTriples([1,1,2,2,2,1]));
console.log(noTriples([0,0,1,0,-4,3,-5]));
console.log(noTriples([0,0,1,0,-4,3,-5,-5,-5,3,0,0,1]));