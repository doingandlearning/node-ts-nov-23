"use strict";
// Exceptions
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Rejections
function levelOne() {
    levelTwo(); // Errors in levelTwo will propagate up to levelOne
}
function levelTwo() {
    try {
        levelThree(); // Errors in levelThree will propagate up to levelTwo
    }
    catch (error) {
        console.log("It didn't work");
    }
}
function levelThree() {
    throw new Error("An error occurred!"); // This error will bubble up through the call stack
}
try {
    levelOne();
}
catch (error) {
    if (error instanceof Error) {
        console.error("Caught an error:", error.message); // This will catch and handle the error
    }
}
function doSomething() {
    return __awaiter(this, void 0, void 0, function* () {
        throw new Error();
    });
}
try {
    doSomething();
}
catch (error) { }
