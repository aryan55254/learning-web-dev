//takes other function as arguments and return function as result
function applyOperation(operation, value) {
    return operation(value);
  }
  
  // A regular function that will be passed as an argument
  function addFive(num) {
    return num + 5;
  }
  
  // Passing 'addFive' as a function to 'applyOperation'
  const result = applyOperation(addFive, 10);
  
  console.log(result); // Output: 15
  