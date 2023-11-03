// Exceptions

// Rejections

function levelOne() {
  levelTwo(); // Errors in levelTwo will propagate up to levelOne
}

function levelTwo() {
  try {
    levelThree(); // Errors in levelThree will propagate up to levelTwo
  } catch (error) {
    console.log("It didn't work");
  }
}

function levelThree() {
  throw new Error("An error occurred!"); // This error will bubble up through the call stack
}

try {
  levelOne();
} catch (error) {
  if (error instanceof Error) {
    console.error("Caught an error:", error.message); // This will catch and handle the error
  }
}

async function doSomething() {
  throw new Error();
}

try {
  doSomething();
} catch (error) {}
