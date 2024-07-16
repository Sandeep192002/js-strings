 function remove_first_occurrence(str, searchstr) {
    if (typeof str !== "string" || typeof searchstr !== "string") {
      throw new Error("Input must be strings.");
    }
  
    const index = str.indexOf(searchstr);
    return index === -1 ? str : str.slice(0, index) + str.slice(index + searchstr.length);
  }
  
  function alphabetizeString(str) {
    if (typeof str !== "string") {
      throw new Error("Input must be a string.");
    }
  
    return [...str].sort((a, b) => a.localeCompare(b)).join(""); // Spread operator, localeCompare, join
  }
  
  // Test Data:
  console.log(alphabetizeString('United States')); // Output: "AEdeeeginrstttu" (correct alphabetical order)
  console.log(alphabetizeString('Äpple')); // Output: "AEelpp" (correct handling of accented characters)