import { Readable, ReadableOptions } from "node:stream";

class NumberStream extends Readable {
  private current: number;
  private max: number;

  constructor(max: number, options?: ReadableOptions) {
    super(options);
    this.current = 1;
    this.max = max;
  }

  _read() {
    const interval = setInterval(() => {
      if (this.current < this.max) {
        console.log(`Pushing number: ${this.current}`);
        this.push(String(this.current));
        this.current += 1;
      } else {
        clearInterval(interval);
        this.push(null);
      }
    }, 1000);
  }
}

let current = 1;
let max = 5;
const numberStream = new Readable({
  read() {
    const interval = setInterval(() => {
      if (current < max) {
        console.log(`Pushing number: ${current}`);
        this.push(String(current));
        current += 1;
      } else {
        clearInterval(interval);
        this.push(null);
      }
    }, 1000);
  },
});

// const numberStream = new NumberStream(5);

numberStream.on("data", (data) =>
  console.log(`From on data: ${data.toString()}\n`)
);
numberStream.pipe(process.stdout);

// process.stdin.pipe(process.stdout);
