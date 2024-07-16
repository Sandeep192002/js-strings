function camelize(str) {
    if (typeof str !== "string") {
      throw new Error("Input must be a string.");
    }
  
    return str.replace(/[- \s]([a-z])/g, char.toUpperCase());
  }
  
  // Test Data:
  console.log(camelize("JavaScript Exercises")); // Output: "JavaScriptExercises"
  console.log(camelize("JavaScript exercises")); // Output: "javascriptExercises" (first word lowercase)
  console.log(camelize("JavaScriptExercises")); // Output: "JavaScriptExercises"