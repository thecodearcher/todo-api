import { connection } from "../../shared/database";
import Sequelize, { Model } from "sequelize";
import { logger } from "../../utils/logger";

export class UserModel extends Model {}

UserModel.init({
        username: Sequelize.STRING,
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        password: Sequelize.STRING,
        email: Sequelize.STRING,
    }, { sequelize: connection, modelName: "user" });

UserModel.sync({alter: true}).then( () => {
    logger.info("created tables");
}).catch( (err) => {
    throw new Error(err);
});
