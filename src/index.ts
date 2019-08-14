import { UserModel } from "./api/User";
import app from "./app";
import db from "./shared/database";
import { logger } from "./utils/logger";
<<<<<<< HEAD
import { PORT } from "./config/index";
=======
import { todoModal } from "./api/todo/todoModal";
>>>>>>> 874518de8ab14415c30f38b7101360d1fe341192

const port = PORT || 3000;
app.set("port", port);

<<<<<<< HEAD
=======
db.connect((err) => {
    if (err) {
        logger.error(err);
        throw new Error(err.message);
    }
    logger.info("Connected to database successfully");
    new UserModel().init();
    new todoModal().todoinit();
});

>>>>>>> 874518de8ab14415c30f38b7101360d1fe341192
app.listen(app.get("port"), (err) => {
    if (err) {
        return logger.error(err);
    }

    return logger.info(`server is listening on ${port}`);
});
