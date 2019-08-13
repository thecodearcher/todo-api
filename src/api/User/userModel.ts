import { db } from "../../shared/database";
import Sequelize, { Model } from "sequelize";
import { logger } from "../../utils/logger";

export class UserModel extends Model {}

UserModel.init({
        username: Sequelize.STRING,
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        password: Sequelize.STRING,
        email: Sequelize.STRING,
    }, { sequelize: db, modelName: "user" });

UserModel.sync({alter: true}).then( () => {
    logger.info("User Table created.");
}).catch( (err) => {
    throw new Error(err);
});
