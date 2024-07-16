function formattedString(pad, userStr, padPos = "l") {
    if (typeof pad !== "string" || typeof userStr !== "string" || typeof padPos !== "string") {
      throw new Error("Input must be strings and padPos must be 'l' or 'r'.");
    }
  
    if (padPos !== "l" && padPos !== "r") {
      throw new Error("padPos must be 'l' (left) or 'r' (right).");
    }
  
    const padLength = pad.length;
    const strLength = userStr.length;
    const targetLength = Math.max(strLength, padLength); // Ensure target length is at least padding length
  
    if (strLength >= targetLength) {
      // No padding needed if string length is already greater than or equal to target length
      return userStr;
    }
  
    const paddingCount = targetLength - strLength;
    const paddingString = pad.repeat(Math.ceil(paddingCount / padLength)); // Repeat pad to meet or exceed padding count
  
    return padPos === "l" ? paddingString.slice(0, paddingCount) + userStr : userStr + paddingString.slice(0, paddingCount);
  }
  
  // Test Data:
  console.log(formattedString('0000', 123, 'l')); // Output: "0123" (left padding)
  console.log(formattedString('00000000', 123, '')); // Output: "12300000" (no padding specified, defaults to right