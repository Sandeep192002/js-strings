function remove_first_occurrence(str, searchstr) {
    if (typeof str !== "string" || typeof searchstr !== "string") {
      throw new Error("Input must be strings.");
    }
  
    const index = str.indexOf(searchstr);
    return index === -1 ? str : str.slice(0, index) + str.slice(index + searchstr.length);
}
  