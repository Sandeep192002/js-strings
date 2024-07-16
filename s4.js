function truncateString(str, numChars) {
    if (typeof str !== "string" || typeof numChars !== "number") {
      throw new Error("Input must be a string and a number.");
    }
  
    if (numChars <= 0) {
      return str; // No truncation if numChars is non-positive
    }
  
    if (numChars >= str.length) {
      return ""; // Return empty string if numChars is greater than or equal to string length
    }
  
    return str.slice(0, numChars);
  }