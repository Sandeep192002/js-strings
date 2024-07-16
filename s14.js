function humanizeFormat(number) {
    if (typeof number !== "number" || Number.isNaN(number)) {
      throw new Error("Input must be a valid number.");
    }
  
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;
  
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return ('${number}th');
    }
  
    switch (lastDigit) {
      case 1:
        return ('${number}st');
      case 2:
        return ('${number}nd');
      case 3:
        return ('${number}rd');
      default:
        return ('${number}th');
    }
  }
  
  // Test Data:
  console.log(humanizeFormat()); // Output: Error (no input)
  console.log(humanizeFormat(1)); // Output: "1st"
  console.log(humanizeFormat(8)); // Output: "8th"
  console.log(humanizeFormat(301)); // Output: "301st"
  console.log(humanizeFormat(402)); // Output: "402nd"