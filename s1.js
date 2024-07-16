function isString(input) {
    return input instanceof String;
  }
  
  console.log(isString('w3resource')); // Output: true
  console.log(isString([1, 2, 4, 0])); // Output: false