function foo(a, b) {
  return a + b;
}

function bar() {
  let x = 10;
  let y = 20;
  const sum = foo(x, y);
  return sum; // Return a new value instead of modifying the original values
}

console.log(bar()); // Output: 30