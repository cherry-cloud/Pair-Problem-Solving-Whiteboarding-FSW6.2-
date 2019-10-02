let input1 = [1, 1, 2, 2, 2, 3, 4]
let input2 = [1, 1, 2, 2, 3, 4]
let input3 = [3, 1, 2, 3, 4]

const noTriples = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] && arr[i +2]) {
      return false
    } else {
      return true
    }
  }
}


noTriples(input1);
noTriples(input2);
noTriples(input3);
