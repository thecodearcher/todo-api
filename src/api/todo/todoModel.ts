import { AppError } from "./../../utils/app-error";
import { db } from "../../shared/database";
import Sequelize, { Model } from "sequelize";
import { logger } from "../../utils/logger";

 class todoModel extends Model {}
     todoModel.init({
          title: Sequelize.STRING,
          body: Sequelize.STRING,
      },{sequelize: db, modelName:"todo"});

     todoModel.sync({alter: true}).then(() => {
           logger.info("todo Table created.");
       }).catch( (err) => {
    throw new AppError(err);
});
export { todoModel } 