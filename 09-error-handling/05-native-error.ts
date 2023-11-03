new Error();
new TypeError();
new SyntaxError();
new EvalError();
new RangeError();
new URIError();

// try {
//   const error = new Error("Something went wrong");
//   error.code = "SRX-232";
//   throw error;
// } catch (error) {
//   console.log(error);
// }

class CHAPIError extends Error {
  constructor(name: string, public code: string = "API-ERROR") {
    super(name);
  }
}

try {
  throw new CHAPIError("Something went wrong", "SRX-232");
} catch (error) {
  if (error instanceof CHAPIError) {
    // email to the oncall
    // webhook
    //
    throw error;
    console.log("It's fine here!");
    return;
  }
  console.log(error);
}
