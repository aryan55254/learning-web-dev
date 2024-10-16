// Higher-order function that returns a new function
function createMultiplier(multiplier) {
    // Returns a function that multiplies its argument by the 'multiplier'
    return function (num) {
      return num * multiplier;
    };
  }
  
  // Create a function that doubles a number (multiplier = 2)
  const double = createMultiplier(2);
  
  // Create a function that triples a number (multiplier = 3)
  const triple = createMultiplier(3);
  
  console.log(double(5));  // Output: 10 (5 * 2)
  console.log(triple(5));  // Output: 15 (5 * 3)
  