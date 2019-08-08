import express from "express";
import { userRouter } from "./api/User";
import { errorHandler, global } from "./middleware";
import { logger } from "./utils/logger";
import { todoRouter } from "./api/todo/todoRouter"
class App {
    public express = express();
    constructor() {
        this.boot();
    }

    private boot() {
        this.registerMiddlewares();
        this.mountRoutes();
        this.handleUncaughtErrorEvents();

    }

    private mountRoutes() {
        this.express.use("/user", userRouter);
        this.express.use("/todo", todoRouter)
    }

    private registerMiddlewares() {
        global(this.express);
    }

    // Error handlers
    private handleUncaughtErrorEvents() {
        process.on("unhandledRejection", (reason, promise) => {
            throw reason;
        });

        process.on("uncaughtException", (error) => {
            logger.error(`Uncaught Exception: ${500} - ${error.message}, Stack: ${error.stack}`);
            process.exit(1);
        });

        process.on("SIGINT", () => {
            logger.info(" Alright! Bye bye!");
            process.exit();
        });

        this.express.use(errorHandler);

    }
}

export default new App().express;
