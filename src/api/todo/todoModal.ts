import db from "../../shared/database";
import { logger } from "../../utils/logger";

export class todoModal{
  public todoinit(){
    db.query(
      "CREATE TABLE IF NOT EXISTS `todo` (id int(11) NOT NULL auto_increment, `title` VARCHAR(255), `body` VARCHAR(255), PRIMARY KEY (`id`))"
      , (err, results, fields) => {
        if (err) {
            logger.error(err.message);
            throw new Error(err.message);
        }
        logger.info("i guess the todo table was created");
    });
  
     return true;
 }
  public create(title:string, body:string){
     db.query(`INSERT INTO 'users' (title, body) VALUES (${title}, ${body})`, (err, results, feilds) => {
    if (err) {
        logger.error(err.message);
        return false;
    }
    logger.info("new todo record adderd to the todotable");
  });
  }
  public  createDbDetails({title, body}) {
    // tslint:disable-next-line: max-line-length
    db.query(`INSERT INTO todo (title, body) VALUES ('${title}', '${body}')`,
    (err, results, fields) => {
        if (err) {
            logger.error(err.message);
            return false;
        }
        logger.info("Database todo details updated .");
    });
    return true;
}

}