function uncamelize(str, separator = " ") {
    if (typeof str !== "string") {
      throw new Error("Input must be a string.");
    }
  
    return str.replace(/([A-Z])/g, (match, char) => separator + char.toLowerCase());
  }
  
  // Test Data:
  console.log(uncamelize('helloWorld')); // Output: "hello world" (default separator)
  console.log(uncamelize('helloWorld', '-')); // Output: "hello-world" (custom separator)
  console.log(uncamelize('helloWorld', '_')); // Output: "hello_world" (custom separator)