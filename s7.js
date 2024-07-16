function stringParamaterize(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string.");
  }

  return str.toLowerCase()
            .replace(/\s+/g, "-") // Replace whitespace with hyphens
            .replace(/[^a-z0-9-]/g, ""); // Remove non-alphanumeric characters and hyphens
}

// Test Data:
console.log(stringParamaterize("Robin Singh from USA.")); // Output: "robin-singh-from-usa"