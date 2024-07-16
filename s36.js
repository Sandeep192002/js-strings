function zeroFill(num, width, sign = "") {
    if (typeof num !== "number" || typeof width !== "number" || typeof sign !== "string") {
      throw new Error("Input must be numbers and sign must be a string.");
    }
  
    const numStr = Math.abs(num).toString(); // Handle negative numbers for consistent zero-filling
    const prefix = sign === "+" ? "+" : (sign === "-" ? "-" : ""); // Validate and set sign
    return prefix + "0".repeat(Math.max(0, width - numStr.length)) + numStr;
  }
  
  // Test Data:
  console.log(zeroFill(120, 5, '-')); // Output: "-00120"
  console.log(zeroFill(29, 4)); // Output: "0029"
  console.log(zeroFill(-34, 6, '+')); // Output: "+000034"
  console.log(zeroFill(1000, 3)); // Output: "1000" (no change if width is less than number length