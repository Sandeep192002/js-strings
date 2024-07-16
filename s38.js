function caseInsensitiveSearch(str, searchStr) {
    if (typeof str !== "string" || typeof searchStr !== "string") {
      throw new Error("Input must be strings.");
    }
  
    const regex = new RegExp(searchStr, "gi"); // Regular expression with case-insensitive flag (i) and global flag (g)
    return regex.test(str) ? "Matched" : "Not Matched";
  }
  
  // Test Data:
  console.log(caseInsensitiveSearch('JavaScript Exercises', 'exercises')); // Output: "Matched"
  console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercises')); // Output: "Matched"
  console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercisess')); // Output: "Not Matched"