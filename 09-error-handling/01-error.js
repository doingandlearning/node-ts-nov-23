"use strict";
// Types of Error
// 1. Operational
// 2. Developer
// - 3 Approaches - callbacks, throw/catch, returning errors
// - Custom Errors/Native Errors
// HOF
function applyToInteger(func, integer) {
    return func(integer);
}
const double = (x) => x * 2;
console.log(applyToInteger(double, 10));
