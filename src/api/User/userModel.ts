<<<<<<< HEAD
// import db from "../../shared/database";
// import { logger } from "../../utils/logger";

// export class UserModel {

//     public init() {
//         db.query(
//             // tslint:disable-next-line: max-line-length
//             "CREATE TABLE IF NOT EXISTS `users` (id int(11) NOT NULL auto_increment, `username` VARCHAR(255), `firstName` VARCHAR(255),  `lastName` VARCHAR(255),  `password` CHAR(32), `email` VARCHAR(255), PRIMARY KEY (`id`))"
//             , (err, results, fields) => {
//             if (err) {
//                 logger.error(err.message);
//                 throw new Error(err.message);
//             }
//             logger.info("i guess the user table was created");
//         });
//     }
//     public create(username: string, email?: string) {
//         db.query(`INSERT INTO 'users' (username, email) VALUES (${username}, ${email})`, (err, results, feilds) => {
//             if (err) {
//                 logger.error(err.message);
//                 return false;
//             }
//             logger.info("user record created");

//         } );
//         return true;
//     }
//     public  createDbDetails({loginName, firstName, lastName, password}) {
//         // tslint:disable-next-line: max-line-length
//         db.query(`INSERT INTO users (username, firstName, lastName, password) VALUES ('${loginName}', '${firstName}', '${lastName}', '${password}')`,
//         (err, results, fields) => {
//             if (err) {
//                 logger.error(err.message);
//                 return false;
//             }
//             logger.info("Database user details updated.");
//         });
//         return true;
//     }
// }
=======
import db from "../../shared/database";
import { logger } from "../../utils/logger";

export class UserModel {

    public init() {
        db.query(
            // tslint:disable-next-line: max-line-length
            "CREATE TABLE IF NOT EXISTS `users` (id int(11) NOT NULL auto_increment, `username` VARCHAR(255), `firstName` VARCHAR(255),  `lastName` VARCHAR(255),  `password` CHAR(32), `email` VARCHAR(255), PRIMARY KEY (`id`))"
            , (err, results, fields) => {
            if (err) {
                logger.error(err.message);
                throw new Error(err.message);
            }
            logger.info("i guess the user table was created");
        });
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
    public  createDbDetails({loginName, firstName, lastName, password}) {
        // tslint:disable-next-line: max-line-length
        db.query(`INSERT INTO users (username, firstName, lastName, password) VALUES ('${loginName}', '${firstName}', '${lastName}', '${password}')`,
        (err, results, fields) => {
            if (err) {
                logger.error(err.message);
                return false;
            }
            logger.info("Database user details updated.");
        });
        return true;
    }
}
>>>>>>> 874518de8ab14415c30f38b7101360d1fe341192
