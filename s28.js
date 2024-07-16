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
  
  function hexToAscii(hexStr) {
    if (typeof hexStr !== "string" || hexStr.length % 2 !== 0) {
      throw new Error("Input must be a string with even length (hexadecimal format).");
    }
  
    const asciiChars = [];
    for (let i = 0; i < hexStr.length; i += 2) {
      const hex = hexStr.slice(i, i + 2); // Extract two-character hex chunk
      const code = parseInt(hex, 16); // Parse hex to integer
      if (isNaN(code)) {
        throw new Error("Invalid hexadecimal characters found in input string.");
      }
      asciiChars.push(String.fromCharCode(code));
    }
  
    return asciiChars.join("");
  }
  
  // Test Data:
  console.log(hexToAscii('3132')); // Output: "12"
  console.log(hexToAscii('313030')); // Output: "100"
  console.log(hexToAscii('1A3F')); // Output: "\x1A\x3F" (non-printable characters)
  console.log(hexToAscii('1A3X')); // Throws error: Invalid hexadecimal characters
  console.log(hexToAscii('31323')); // Throws error: Input must be a string with even length