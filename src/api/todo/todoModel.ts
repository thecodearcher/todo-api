import { AppError } from "./../../utils/app-error";
import { db } from "../../shared/database";
import Sequelize, { Model } from "sequelize";
import { logger } from "../../utils/logger";

class TodoModel extends Model {}
     TodoModel.init({
          title: Sequelize.STRING,
          body: Sequelize.STRING,
      },{sequelize: db, modelName:"todo"});

     TodoModel.sync({alter: true}).then(() => {
           logger.info("todo Table created.");
       }).catch( (err) => {
    throw new AppError(err);
});

export { TodoModel }
