function capitalizeWords(str) {
    if (typeof str !== "string") {
      throw new Error("Input must be a string.");
    }
  
    return str.split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  
  // Test Data:
  console.log(capitalizeWords('js string exercises')); // Output: "Js String Exercises"