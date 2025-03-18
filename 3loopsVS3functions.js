// Test using inline nested loops
function testInline() {
  let sum = 0;
  // Record the start time
  let start = performance.now();
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      for (let k = 0; k < 100; k++) {
        sum++; // Increment the sum directly
      }
    }
  }
  // Record the end time and output the result
  let end = performance.now();
  console.log("Inline loop time: " + (end - start) + " ms, sum = " + sum);
}

// The innermost loop implemented as a function call
function loop3(sumObj) {
  for (let k = 0; k < 100; k++) {
    sumObj.value++; // Update the sum inside an object
  }
}

// The middle loop that calls the innermost loop function
function loop2(sumObj) {
  for (let j = 0; j < 100; j++) {
    loop3(sumObj);
  }
}

// The outermost loop that calls the middle loop function
function loop1() {
  let sumObj = { value: 0 };
  for (let i = 0; i < 100; i++) {
    loop2(sumObj);
  }
  return sumObj.value;
}

// Test using nested loops implemented with function calls
function testFunctionCall() {
  let start = performance.now();
  let result = loop1();
  let end = performance.now();
  console.log("Function call loop time: " + (end - start) + " ms, sum = " + result);
}

// Run both tests
testInline();
testFunctionCall();
