const nextBiggerNumSameDigits = function(num){
  let number = num.toString();
  let newStr = "";
  for(let i = 0; i < number.length; i++){
    if(number[i] < number[i+1]){
      newStr += number[i+1]
      newStr += number[i]
      break;
    }
   else{
     newStr += number[i]
   }
  }
  return newStr;
}

console.log(nextBiggerNumSameDigits(12));
console.log(nextBiggerNumSameDigits(513));
console.log(nextBiggerNumSameDigits(2017));
