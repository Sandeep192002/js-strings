function count(str, searchValue, caseSensitive = true) {
    if (typeof str !== "string" || typeof searchValue !== "string" || typeof caseSensitive !== "boolean") {
      throw new Error("Input must be strings and caseSensitive must be a boolean.");
    }
  
    if (searchValue.length === 0) {
      return 0; // Empty search value results in 0 occurrences
    }
  
    const normalizedStr = caseSensitive ? str : str.toLowerCase(); // Normalize string based on case sensitivity
    const normalizedSearchValue = caseSensitive ? searchValue : searchValue.toLowerCase();
  
    let count = 0;
    let index = 0;
    while ((index = normalizedStr.indexOf(normalizedSearchValue, index)) !== -1) {
      count++;
      index += normalizedSearchValue.length; // Move to the next position after the match
    }
  
    return count;
  }
  
  // Test Data:
  console.log(count("The quick brown fox jumps over the lazy dog", 'the')); // Output: 2 (case sensitive)
  console.log(count("The quick brown fox jumps over the lazy dog", 'the', false)); // Output: 4 (case insensitive)
  console.log(count("The quick brown fox jumps over the lazy dog", 'fox', false)); // Output: 1 (case insensitive)