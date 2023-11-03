import fs, { read } from "node:fs";

const writeStream = fs.createWriteStream("./output.txt");

writeStream.write("Hello, 4 minutes until lunch");
writeStream.end("I'm all done!");
