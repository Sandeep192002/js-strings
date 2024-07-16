function repeatString(str, count = 0) {
    if (typeof str !== "string" || typeof count !== "number") {
      throw new Error("Input must be a string and count must be a number.");
    }
    let result = "";
    for (let i = 0; i < count; i++) {
      result += str;
    }
    return result;
  }