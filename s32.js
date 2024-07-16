function removeNonPrintableAscii(str) {
    if (typeof str !== "string") {
      throw new Error("Input must be a string.");
    }
  
    return str.replace(/[^\x20-\x7E]/g, ""); // Printable ASCII range from space to tilde
  }
  
  // Test Data:
  console.log(removeNonPrintableAscii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ')); // Output: "PHP-MySQL"
  console.log(removeNonPrintableAscii('\x07This has a bell character\x07')); // Output: "This has a bell character" (bell character removed)