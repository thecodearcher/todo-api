import appRoot from "app-root-path";
import { createLogger, format, transports } from "winston";
const { printf } = format;

const logFormat = printf((info) => {
    return `${info.timestamp} [${info.level}]: ${info.message}`;
});

const options = {
    error: {
        level: "error",
        filename: `${appRoot}/logs/error.log`,
        handleExceptions: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    combined: {
        level: "info",
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    console: {
        handleExceptions: true,
        colorize: true,
        format: format.combine(format.colorize(), format.timestamp(), logFormat),
    },
};
// instantiate a new Winston Logger with the settings defined above
export const logger = createLogger({
    format: format.combine(format.timestamp(), logFormat),
    transports: [
        new transports.File(options.error),
        new transports.File(options.combined),
        new transports.Console(options.console),
    ],
    exitOnError: false, // do not exit on handled exceptions
});
