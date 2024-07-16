function removeNonWordChars(str) {
    if (typeof str !== "string") {
      throw new Error("Input must be a string.");
    }
  
    const wordChars = "\\w\\s"; // Word characters (alphanumeric and underscore) and whitespace
    const pattern = new RegExp // Match characters not in wordChars (global flag)
    return str.replace(pattern, "");
  }
  
  // Test Data:
  console.log(removeNonWordChars('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL')); // Output: "PHP - MySQL"
  console.log(removeNonWordChars('This string has numbers 123 and underscores_')); // Output: "This string has numbers 123 and underscores_