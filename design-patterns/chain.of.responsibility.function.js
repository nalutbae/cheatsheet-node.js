// function example of chain of responsibility pattern

// Log level constant definition
const LogLevel = {
  INFO: 1,
  DEBUG: 2,
  WARNING: 3,
  ERROR: 4,
};

// Log Message function
function logMessage(level, message) {
  return {
    level,
    message,
  };
}

// Log handler function
function logHandler(level, processLog) {
  let nextHandler = null;

  function setNextHandler(handler) {
    nextHandler = handler;
  }

  function handleRequest(logMessage) {
    if (logMessage.level <= level) {
      processLog(logMessage);
    }

    if (nextHandler) {
      nextHandler.handleRequest(logMessage);
    }
  }

  return {
    setNextHandler,
    handleRequest,
  };
}

// Specific log handler classes that handle each log level
function consoleLogger(logMessage) {
  console.log(`[Console Logger] ${logMessage.message}`);
}

function fileLogger(logMessage) {
  console.log(`[File Logger] ${logMessage.message}`);
}

function emailLogger(logMessage) {
  console.log(`[Email Logger] ${logMessage.message}`);
}

// Usage
const consoleLoggerHandler = logHandler(LogLevel.INFO, consoleLogger);
const fileLoggerHandler = logHandler(LogLevel.DEBUG, fileLogger);
const emailLoggerHandler = logHandler(LogLevel.ERROR, emailLogger);

consoleLoggerHandler.setNextHandler(fileLoggerHandler);
fileLoggerHandler.setNextHandler(emailLoggerHandler);

// Log message creation
const logMessage1 = logMessage(LogLevel.INFO, "Informational message");
const logMessage2 = logMessage(LogLevel.DEBUG, "Debugging message");
const logMessage3 = logMessage(LogLevel.WARNING, "Warning message");
const logMessage4 = logMessage(LogLevel.ERROR, "Error message");

// Log message to the log handler
consoleLoggerHandler.handleRequest(logMessage1);
consoleLoggerHandler.handleRequest(logMessage2);
consoleLoggerHandler.handleRequest(logMessage3);
consoleLoggerHandler.handleRequest(logMessage4);
