export function add(a: number, b: number): number {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both variables must be numbers");
  }
  return a + b;
}

// ?a=12&b=14

// ?a=one&b=two
