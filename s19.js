function escapeHTML(str) {
    if (typeof str !== "string") {
      throw new Error("Input must be a string.");
    }
  
    const replacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
  
    return str.replace(/[&<>"']/g, match => replacements[match]);
  }
  
  // Test Data:
  console.log(escapeHTML('<a href="javascript-string-exercise-17.php" target="_blank">')); 
  // Output: "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"