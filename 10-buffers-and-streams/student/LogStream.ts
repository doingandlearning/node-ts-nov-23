const fs = require("fs");
const { Writable } = require("stream");

// Either:
class LogStream extends Writable {
  // Implement the _write method
  constructor() {}

  _write(
    logData,
    encoding: BufferEncoding,
    callback: (error?: Error | null) => void
  ) {}
}

const logger = new LogStream("application.log");

// Or

// function createLogStream(logFilePath: string) {
//   return new Writeable()
// }

// const logger = createLogStream("application.log")

// Handle process shutdown and clean up resources
function handleShutdown() {
  logger.end();
  console.log("Process is shutting down. Closing log stream.");
}

process.on("SIGINT", handleShutdown);
process.on("SIGTERM", handleShutdown);
process.on("exit", handleShutdown);

// Test the logging system
function testLoggingSystem() {
  logger.write({ level: "INFO", message: "This is an info message" });

  // Simulate an error
  logger.destroy(new Error("Simulated stream error"));

  // Simulate more logs after stream destruction to test error handling
  logger.write({ level: "INFO", message: "This log should not be written" });
}

// Run the test function
testLoggingSystem();
