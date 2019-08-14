import { Model ,DataTypes } from "sequelize" 
import { connection } from "../../shared/database"

export class todoModel extends Model {}
      todoModel.init({
        title: { type: DataTypes.STRING(65)},
        body: {type: DataTypes.STRING(62)}
      },{
        sequelize:connection, modelName: 'todo'
      });
      todoModel.sync({alter:true}).then(()=>{
        console.log("the new table has being created")
      })






