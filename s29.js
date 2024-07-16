function searchWord(str, word, flags = "") {
    if (typeof str !== "string" || typeof word !== "string") {
      throw new Error("Input must be strings.");
    }
  
    const regex = new RegExp('\\b${word}\\b, flags'); // Word boundaries and optional flags
    const matches = str.matchAll(regex);
    return ('${word} was found ${matches.length} times.');
  }
  
  // Example usage with case-insensitive flag:
  console.log(searchWord('The quick brown fox', 'FOX', 'i')); // Output: "FOX was found 1 times."