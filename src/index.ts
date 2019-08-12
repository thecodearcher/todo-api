import { UserModel } from "./api/User";
import app from "./app";
import db from "./shared/database";
import { logger } from "./utils/logger";
import { todoModal } from "./api/todo/todoModal";

const port =  3000;
app.set("port", port);

db.connect((err) => {
    if (err) {
        logger.error(err);
        throw new Error(err.message);
    }
    logger.info("Connected to database successfully");
    new UserModel().init();
    new todoModal().todoinit();
});

app.listen(app.get("port"), (err) => {
    if (err) {
        return logger.error(err);
    }

    return logger.info(`server is listening on ${port}`);
});
