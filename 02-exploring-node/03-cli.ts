// const fs = require("node:fs");
import fs from "node:fs";
// node 03-cli Nicola
// file called names.txt
function addName(name: string) {
  fs.appendFile("names.txt", `${name}\n`, "utf-8", (error) => {
    if (error) {
      console.log(error);
    }
  });
}

// rest operator
const [, , ...names] = process.argv;

names.forEach((name) => addName(name));
