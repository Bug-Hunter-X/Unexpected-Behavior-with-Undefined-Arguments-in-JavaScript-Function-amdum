function foo(a, b) {
  a = a === undefined ? null : a; // Treat undefined as null
  b = b === undefined ? null : b; // Treat undefined as null

  if (a === null || b === null) {
    return null; // Handle null values
  }

  // ... rest of the function
}