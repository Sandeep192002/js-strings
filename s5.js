function abbrevName(name) {
    if (typeof name !== "string") {
      throw new Error("Input must be a string.");
    }
  
    const trimmedName = name.trim();
    const nameParts = trimmedName.split(/\s+/);
  
    if (nameParts.length === 1) {
      return nameParts[0]; // Return the single name if only one part
    }
  
    // Handle cases with initials (e.g., A. B. Lastname)
    const initials = nameParts.slice(0, -1).map(part => part.charAt(0) + ".");
    const lastName = nameParts[nameParts.length - 1];
  
    return initials.join(" ") + " " + lastName;
  }
  