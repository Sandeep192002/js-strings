function stringEndsWith(str, suffix) {
    if (typeof str !== "string" || typeof suffix !== "string") {
      throw new Error("Input must be strings.");
    }
  
    if (suffix.length === 0) {
      return true; // Empty suffix matches any string
    }
  
    return str.lastIndexOf(suffix) === str.length - suffix.length;
  }
  
  // Test Data:
  console.log(stringEndsWith('JS PHP PYTHON', 'PYTHON')); // Output: true
  console.log(stringEndsWith('JS PHP PYTHON', '')); // Output: false
  console.log(stringEndsWith('This string ends with XYZ', 'XYZ')); // Output: true
  console.log(stringEndsWith('This string ends with XYZ', 'xyz')); // Output: false (case-sensitive)