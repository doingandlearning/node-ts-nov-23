import assert from "node:assert";

function addNumber(a: number, b: number) {
  return a + b;
}

assert.equal(addNumber(1, 2), 3);

const arr1 = [1, 2, 3];
const arr2 = arr1;

assert.equal(arr1, arr2);

assert(arr1.includes(1));
assert(arr1.includes(2));
assert(arr1.includes(3));

[1, 2, 3, 4].forEach((elemet) => assert(arr1.includes(elemet)));

arr2.push(4);

console.log(arr1);
console.log(arr2);
