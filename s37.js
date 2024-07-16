function compareStrings(str1, str2) {
    if (typeof str1 !== "string" || typeof str2 !== "string") {
      throw new Error("Input must be strings.");
    }
  
    // Use localeCompare with an options object
    const options = { sensitivity: 'base' };
    return str1.localeCompare(str2, undefined, options) === 0;
  }
  
  // Test Data:
  console.log(compareStrings('abcd', 'AbcD'));  // true
  console.log(compareStrings('ABCD', 'Abce'));  // false
  console.log(compareStrings('áÀãÃäÄ', 'ÁÀãÃäÄ'));  // true (basic Latin characters with accents)
  console.log(compareStrings('ñÑ', 'Ññ'));       // false (Ñ has different uppercase/lowercase)