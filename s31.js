function escapeHtml(str) {
    if (typeof str !== "string") {
      throw new Error("Input must be a string.");
    }
  
    const htmlEntities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;'
    };
  
    return str.replace(/[&<>"']/g, (char) => htmlEntities[char]);
  }
  
  // Test Data:
  console.log(escapeHtml('PHP & MySQL')); // Output: "PHP &amp; MySQL"
  console.log(escapeHtml('3 > 2')); // Output: "3 &gt; 2"
  console.log(escapeHtml('This string has "quotes" and \'apostrophes\'')); // Output: "This string has &quot;quotes&quot; and &#39;apostrophes&#39;" (escapes both double and single quotes)