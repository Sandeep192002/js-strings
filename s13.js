function repeat(str, n = 1) {
    if (typeof str !== "string" || typeof n !== "number") {
      throw new Error("Input must be a string and a number.");
    }
  
    if (n <= 0) {
      return ""; // Return empty string for non-positive n
    }
  
    return new Array(n + 1).join(str); // More efficient array-based approach
  }
  
  // Test Data:
  console.log(repeat('Ha!')); // Output: "Ha!"
  console.log(repeat('Ha!', 2)); // Output: "Ha!Ha!"
  console.log(repeat('Ha!', 3)); // Output: "Ha!Ha!Ha!