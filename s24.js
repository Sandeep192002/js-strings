function truncate(str, num) {
    if (typeof str !== "string" || typeof num !== "number" || Number.isNaN(num)) {
      throw new Error("Input must be a string and num must be a valid number.");
    }
  
    if (num <= 0) {
      return ""; // No truncation if num is non-positive
    }
  
    const words = str.split(" ");
    return words.slice(0, num).join(" ") + (words.length > num ? "..." : "");
  }