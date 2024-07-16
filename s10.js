function swapCase(str) {
    if (typeof str !== "string") {
      throw new Error("Input must be a string.");
    }
  
    return str.split("").map(char => {
      const lowerChar = char.toLowerCase();
      return lowerChar === char ? char.toUpperCase() : lowerChar;
    }).join("");
  }
  
  // Test Data:
  console.log(swapCase('AaBbc')); // Output: "aAbBC"