var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  
  var animal = 'cat'//making the variable cat local to this function
  return animal
}

function add2(n) {
  
  const two = 2 //defining the constant two before returning
  return n + two
}

var funkyFunction = function() {
  return function() {
    return 'FUNKY!'
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

var theFunk = funkyFunction()()