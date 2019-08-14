
import { logger } from "../utils/logger";

export default (err, req, res, next) => {

    logger.error(
        `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${
        req.ip
        } - Stack: ${err.stack}`,
    );
    err.stack = err.stack || "";
    const errorDetails = {
        status: false,
        message: err.message,
        statusCode: err.statusCode || 500,
        data: err.data,
        stack: err.stack,
    };

    res.status(err.statusCode || 500);
    return res.json(errorDetails);
};
