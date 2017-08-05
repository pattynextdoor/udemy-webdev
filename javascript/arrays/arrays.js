function printReverse(arr) {
  for (var i = arr.length; i >= 0; i--) {
    console.log(arr[i]);
  }
}

function isUniform(arr) {
  if(arr.length == 0 || arr.length == 1){
    return true;
  }
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] != arr[0]) {
      return false;
    }
  }
  return true;
}

function sumArray(arr) {
  var sum = 0;

  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function max(arr) {
  var max = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
