 function capitalizeFirstLetter(str) {
    if (typeof str !== "string") {
      throw new Error("Input must be a string.");
    }
  
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Test Data:
  console.log(capitalizeFirstLetter('js string exercises')); // Output: "Js string exercises"
  