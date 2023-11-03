"use strict";
const applyToInteger = (func, integer) => {
    if (typeof func !== "function") {
        return new TypeError("Invalid argument: First argument is not a function");
    }
    if (!Number.isInteger(integer)) {
        return new TypeError(`Invalid argument: Second argument ${integer} is not an integer`);
    }
    return func(integer);
};
const applyAndPrintResult = (func, integer) => {
    const result = applyToInteger(func, integer);
    if (result instanceof Error) {
        console.log("Sorry, result could not be calculated:");
        console.log(result.message);
    }
    else {
        console.log("Result successfully calculated:");
        console.log(`Applying ${func.name} to ${integer} gives ${result}`);
    }
};
