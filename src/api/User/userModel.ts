import db from "../../shared/database";
import { logger } from "../../utils/logger";

export class UserModel {

    public init() {
        db.query(
            // tslint:disable-next-line: max-line-length
            "CREATE TABLE IF NOT EXISTS `users` (id int(11) NOT NULL auto_increment, `username` VARCHAR(255), `email` VARCHAR(255), PRIMARY KEY (`id`))",
        );
        logger.info("i guess the user table was created");
    }
    public create(username: string, email?: string) {
        db.query(`INSERT INTO 'users' (username, email) VALUES (${username}, ${email})`, (err, results, feilds) => {
            if (err) {
                logger.error(err.message);
                return false;
            }
            logger.info("user record created");
        } );
        return true;
    }
}
