function textTruncate(str, length = 0, truncationChars = "...") {
    if (typeof str !== "string" || typeof length !== "number" || typeof truncationChars !== "string") {
      throw new Error("Input must be strings and length must be a number.");
    }
  
    if (length <= 0 || length >= str.length) {
      return str; // No truncation if length is non-positive or equal to or greater than string length
    }
  
    return str.slice(0, length - truncationChars.length) + truncationChars;
  }
  
  // Test Data:
  console.log(textTruncate('We are doing JS string exercises.')); // Output: "We are doing JS string exercises." (no truncation)
  console.log(textTruncate('We are doing JS string exercises.', 19)); // Output: "We are doing JS ..."
  console.log(textTruncate('We are doing JS string exercises.', 15, '!!')); // Output: "We are doing !!"