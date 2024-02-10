// class example of chain of responsibility pattern

// Log level constant definition
const LogLevel = {
  INFO: 1,
  DEBUG: 2,
  WARNING: 3,
  ERROR: 4,
};

// Log Message Class
class LogMessage {
  constructor(level, message) {
    this.level = level;
    this.message = message;
  }
}

// Log handler class
class LogHandler {
  constructor(level) {
    this.level = level;
    this.nextHandler = null;
  }

  setNextHandler(handler) {
    this.nextHandler = handler;
  }

  handleRequest(logMessage) {
    if (logMessage.level <= this.level) {
      this.processLog(logMessage);
    }

    if (this.nextHandler) {
      this.nextHandler.handleRequest(logMessage);
    }
  }

  processLog(logMessage) {
    throw new Error("processLog method must be implemented");
  }
}

// Specific log handler classes that handle each log level
class ConsoleLogger extends LogHandler {
  constructor(level) {
    super(level);
  }

  processLog(logMessage) {
    console.log(`[Console Logger] ${logMessage.message}`);
  }
}

class FileLogger extends LogHandler {
  constructor(level) {
    super(level);
  }

  processLog(logMessage) {
    console.log(`[File Logger] ${logMessage.message}`);
  }
}

class EmailLogger extends LogHandler {
  constructor(level) {
    super(level);
  }

  processLog(logMessage) {
    console.log(`[Email Logger] ${logMessage.message}`);
  }
}

// Usage
const consoleLogger = new ConsoleLogger(LogLevel.INFO);
const fileLogger = new FileLogger(LogLevel.DEBUG);
const emailLogger = new EmailLogger(LogLevel.ERROR);

consoleLogger.setNextHandler(fileLogger);
fileLogger.setNextHandler(emailLogger);

// Log message creation
const logMessage1 = new LogMessage(LogLevel.INFO, "Informational message");
const logMessage2 = new LogMessage(LogLevel.DEBUG, "Debugging message");
const logMessage3 = new LogMessage(LogLevel.WARNING, "Warning message");
const logMessage4 = new LogMessage(LogLevel.ERROR, "Error message");

// Log message to the log handler
consoleLogger.handleRequest(logMessage1);
consoleLogger.handleRequest(logMessage2);
consoleLogger.handleRequest(logMessage3);
consoleLogger.handleRequest(logMessage4);
