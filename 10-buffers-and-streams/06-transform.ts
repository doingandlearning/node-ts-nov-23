import zlib from "node:zlib";
import fs, { read, write } from "node:fs";
import { PassThrough } from "node:stream";

const readStream = fs.createReadStream("longtext.txt");
const transformStream = zlib.createGzip();
const writeStream = fs.createWriteStream("longtext.txt.gz");

readStream.on("error", (error) => {
  if (!readStream.destroyed) {
    readStream.destroy();
  }
  throw new Error("Testing");
});

readStream.on("end", () => {
  if (!readStream.destroyed) {
    readStream.destroy();
  }
});

transformStream.on("error", () => {});
writeStream.on("error", () => {});

process.on("SIGINT", () => {
  readStream.destroy();
  transformStream.destroy();
  writeStream.destroy();
});
// process.on("SIGTERM");
// process.on("exit");

// backflow
try {
  readStream
    .pipe(transformStream)
    .pipe(writeStream)
    .on("error", () => {});
} catch (error) {
  console.log(error);
}
