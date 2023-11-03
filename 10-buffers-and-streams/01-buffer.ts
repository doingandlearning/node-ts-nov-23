import fs from "node:fs";
import buffer from "node:buffer";

fs.readFile("./test.txt", (error, data) => {
  if (error) console.log(error);

  console.log(data.toString());
  // const buffer = Buffer.alloc(10);
});
