function strip(str) {
    if (typeof str !== "string") {
      throw new Error("Input must be a string.");
    }
    return str.replace(/^\s+|\s+$/g, "");
  }