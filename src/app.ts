import express from "express";
import { todoRouter } from "./api/Todo";
import  { connection } from "./shared/database";
import { errorHandler, global } from "./middleware";
import { logger } from "./utils/logger";
<<<<<<< HEAD
=======
import { todoRouter } from "./api/todo/todoRouter"
>>>>>>> 874518de8ab14415c30f38b7101360d1fe341192
class App {
    public express = express();
    constructor() {
        this.boot();
    }

    private boot() {
        this.registerMiddlewares();
        this.mountRoutes();
        this.handleUncaughtErrorEvents();
        this.startDb();

    }
    private startDb() {
        connection.authenticate()
        .then(() => {
            logger.info("Connected to database successfully");
        })
        .catch( (err) => {
            logger.error(err);
            // throw new Error(err.message);
        });
    }

    private mountRoutes() {
<<<<<<< HEAD
        
        // this.express.use("/user", userRouter);
         this.express.use("/todo", todoRouter)
=======
        this.express.use("/user", userRouter);
        this.express.use("/todo", todoRouter)
>>>>>>> 874518de8ab14415c30f38b7101360d1fe341192
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
