function stringToArray(str) {
    return str.trim().split(/\s+/);
  }
  
  console.log(stringToArray("Robin Singh")); // Output: ["Robin", "Singh"]
  console.log(stringToArray("  Hello, World!  ")); // Output: ["Hello,", "World!"]