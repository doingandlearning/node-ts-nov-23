// HOF
function applyToInteger(func, integer: number, callback) {
  if (typeof func !== "function") {
    callback(new TypeError("The first parameter must be a function."));
  }
  callback(null, func(integer));
}

const double = (x) => x * 2;

applyToInteger(true, 10, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Success: the result is ${result}.`);
});

export {};
