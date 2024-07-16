function removeHtmlTags(str) {
    if (typeof str !== "string") {
      throw new Error("Input must be a string.");
    }
  
    // Use a regular expression with optional flags for flexibility
    const pattern = /<[^>]*>/g; // Match any opening or closing tag (without nesting)
    return str.replace(pattern, "");
  }
  
  // Test Data:
  console.log(removeHtmlTags('<p><strong><em>PHP Exercises</em></strong></p>')); // Output: "PHP Exercises"
  console.log(removeHtmlTags('<div id="content">This has <b>bold</b> text.</div>', 'i')); // Output: "This has bold text." (case-insensitive with 'i' flag)