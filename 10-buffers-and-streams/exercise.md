Given the foundational knowledge provided in the workshop, here's an exercise that can help solidify the understanding of streams, error handling, and graceful shutdown in Node.js. This exercise is designed to take approximately 20-30 minutes to complete.

### Exercise: Stream-Based Logging System

#### Objective:
Create a stream-based logging system that writes log messages to a file. The system should be able to handle errors gracefully and perform a clean shutdown when the process exits.

#### Starting Code:
Provide a basic `Writable` stream setup to write to a log file:

```javascript
const fs = require('fs');
const { Writable } = require('stream');

class LogStream extends Writable {
  // Implement the _write method
}

const logger = new LogStream();

// Handle process shutdown and clean up resources
function handleShutdown() {
  logger.end();
  console.log('Process is shutting down. Closing log stream.');
}

process.on('SIGINT', handleShutdown);
process.on('SIGTERM', handleShutdown);
process.on('exit', handleShutdown);
```

#### Task Instructions:
1. **Complete the `LogStream` class**: Implement the `_write` method to handle logging messages to the `application.log` file. Ensure that the method properly formats the log messages with a timestamp.

2. **Error Handling**: Add error handling to the `LogStream` class to catch and log any stream errors to the console. If an error occurs, the stream should close gracefully.

3. **Graceful Shutdown**: Implement the `handleShutdown` function to correctly end the `LogStream` and log a shutdown message to the console.

4. **Testing the System**: Write a short script to test the logging system. It should log multiple messages and handle any errors that occur during the write operations.

#### Bonus Challenge:
Enhance the logging system with a feature that rotates the log file once it reaches a certain size. When this happens, the current log file should be renamed, and a new log file should be created for subsequent log messages.
