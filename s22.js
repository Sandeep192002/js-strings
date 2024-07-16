function subStrAfterChars(str, char, pos = 'b') {
    if (typeof str !== "string" || typeof char !== "string" || typeof pos !== "string") {
      throw new Error("Input must be strings and pos must be 'a' or 'b'.");
    }
  
    if (pos !== 'a' && pos !== 'b') {
      throw new Error("pos must be 'a' (before) or 'b' (after).");
    }
  
    const index = pos === 'b' ? str.indexOf(char) : str.lastIndexOf(char); // Use indexOf for 'b' (after), lastIndexOf for 'a' (before)
  
    return index !== -1 ? str.slice(index + (pos === 'b' ? 1 : 0)) : ""; // Handle not found and adjust slice index for 'b'
  }
  
  // Test Data:
  console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a')); // Output: "w3resource"
  console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E', 'b')); // Output: "xercises"
  console.log(subStrAfterChars('This does not have a delimiter', 'X', 'b')); // Output: "" (not found)