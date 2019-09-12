const noTriples = function(arr){
  for(let i = 0; i < arr.length - 2;i++){
  if(arr[i] === arr[i+1] && arr[i] === arr[i+2]){
    return false
  }
  else{
    return true
  }
  }
}

console.log(noTriples([1,1,2,2,1]));
console.log(noTriples([1,1,2,2,2,1]));
