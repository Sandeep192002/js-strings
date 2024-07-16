function toTitleCase(str) {
    if (typeof str !== "string") {
      throw new Error("Input must be a string.");
    }
  
    // Handle edge cases: empty string, all lowercase/uppercase
    str = str.trim(); // Remove leading/trailing whitespace
    if (str === "") {
      return "";
    } else if (str.toUpperCase() === str) {
      return str.toLowerCase().replace(/\b\w/g, w => w.toUpperCase()); // All uppercase -> title case
    } else if (str.toLowerCase() === str) {
      return str; // All lowercase remains lowercase
    }
  
    // Convert to lowercase and split into words
    const words = str.toLowerCase().split(/\s+/);
  
    // Capitalize first letter of each word
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  
  // Test Data:
  console.log(toTitleCase('PHP exercises. python exercises.')); // Output: "Php Exercises. Python Exercises."
  console.log(toTitleCase('THIS IS ALL UPPERCASE')); // Output: "This Is All Uppercase"
  console.log(toTitleCase('this is all lowercase')); // Output: "this is all lowercase"
  console.log(toTitleCase('')); // Output: "" (empty string remains empty)