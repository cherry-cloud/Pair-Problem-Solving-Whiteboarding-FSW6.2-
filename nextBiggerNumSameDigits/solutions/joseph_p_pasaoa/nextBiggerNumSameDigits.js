// Johanne Enama & Joseph P. Pasaoa
//

const nextBiggerNumSameDigits = (inputNum) => {
  // Helper functions that find digit makeup obj and 'fingerprint' obj of any num //
  const getMakeup = (num) => {
    let makeupObj = {};
    let inputArr = '' + num;
    inputArr.split('');
    for (let digit of inputArr) {
      if (!makeupObj[digit]) {
        makeupObj[digit] = 1;
      } else {
        makeupObj[digit] += 1;
      }
    }
    return makeupObj;
  }
  const getFingerprint = (makeupObj) => {
    let fingerprintStr = (Object.keys(makeupObj)).join('');
    fingerprintStr += (Object.values(makeupObj)).join('');
    return fingerprintStr;
  }
  
  // Saves makeup obj & fingerprint obj of input num //
  const inputMakeup = getMakeup(inputNum);
  const inputFingerprint = getFingerprint(inputMakeup);

  // Uses input makeup obj to determine largest poss num with same digits //
  let inputDigitsArr = Object.keys(inputMakeup);
  inputDigitsArr = inputDigitsArr.reverse();
  let biggestPossibleNum = '';
  for (let digit of inputDigitsArr) {
    for (let i = inputMakeup[digit]; i > 0; i--) {
      biggestPossibleNum += digit;
    }
  }
  biggestPossibleNum = Number(biggestPossibleNum);

  // Checks if input num is already largest possible num with input digits and returns -1 if so //
  if (inputNum === biggestPossibleNum) {
    return -1;
  }

  // Finds next possible num with same input digits //
  for (let i = inputNum + 1; i <= biggestPossibleNum; i++) {
    if (inputFingerprint === getFingerprint(getMakeup(i))) {
      return i;
    }
  }
}

console.log(nextBiggerNumSameDigits(1000787));
console.log(nextBiggerNumSameDigits(356));
console.log(nextBiggerNumSameDigits(333));
console.log(nextBiggerNumSameDigits(12));
console.log(nextBiggerNumSameDigits(513));
console.log(nextBiggerNumSameDigits(2017));
console.log(nextBiggerNumSameDigits(9));
console.log(nextBiggerNumSameDigits(111));
console.log(nextBiggerNumSameDigits(531));
console.log(nextBiggerNumSameDigits(234));