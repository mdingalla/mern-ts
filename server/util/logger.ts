import winston from "winston";
import { Logger } from "winston";
import { ENVIRONMENT } from "./secrets";

// const logger = new (Logger)({
//     transports: [
//         new (winston.transports.Console)({ level: process.env.NODE_ENV === "production" ? "error" : "debug" }),
//         new (winston.transports.File)({ filename: "debug.log", level: "debug"})
//     ]
// });

const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log`
      // - Write all logs error (and below) to `error.log`.
      //
      new winston.transports.Console({ level: process.env.NODE_ENV === "production" ? "error" : "debug" }),
      new winston.transports.File({ filename: "debug.log", level: "debug"})
    ]
  });

if (process.env.NODE_ENV !== "production") {
    logger.debug("Logging initialized at debug level");
}

export default logger;

