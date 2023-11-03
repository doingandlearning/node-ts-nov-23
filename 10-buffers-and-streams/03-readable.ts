import fs, { read } from "node:fs";

const readStream = fs.createReadStream("longtext.txt");

// .on("data")
// .on("end")
// .on("close")
// .on("error")
readStream.on("data", (chunk) => {
  console.log(chunk.length);
});

readStream.on("end", () => {
  console.log("all done");
});
readStream.on("close", () => {
  console.log("all done");
});
readStream.on("error", () => {
  console.log("Something went wrong!");
});
