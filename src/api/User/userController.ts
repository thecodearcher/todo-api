<<<<<<< HEAD
// // import { IUser } from ".";
// import { BaseController } from "../baseController";
// import { UserModel } from "./userModel";
=======
// import { IUser } from ".";
import { BaseController } from "../baseController";
import { UserModel } from "./userModel";

const userModel = new UserModel();
>>>>>>> 874518de8ab14415c30f38b7101360d1fe341192

// const userModel = new UserModel();

<<<<<<< HEAD
// /**
//  * User controller
//  *
//  * @export
//  * @class UserController
//  */
// export class UserController extends BaseController {

//     public getUserDetails = async (id) => {
//         return this.sendResponse(id);
//      }
//     public createUser = async (username: string, email?: string) => {
//        const user = userModel.create(username, email);
//        if (!user) {
//            throw new Error("could not create user");
//        }
//        return this.sendResponse(`${username} created.`);
//     //    don't stil get thnis place
//     }
//     public createMainUser = async (userDetails: any) => {
//         const user = userModel.createDbDetails(userDetails);
//         const { loginName } = userDetails;
//         if (!user) {
//             throw new Error("could not create user");
//         }
//         return this.sendResponse(`${loginName} created.`);
//     }
// }
=======
    public getUserDetails = async (id) => {
        return this.sendResponse(id);
     }
    public createUser = async (username: string, email?: string) => {
       const user = userModel.create(username, email);
       if (!user) {
           throw new Error("could not create user");
       }
       return this.sendResponse(`${username} created.`);
    //    don't stil get thnis place
    }
    public createMainUser = async (userDetails: any) => {
        const user = userModel.createDbDetails(userDetails);
        const { loginName } = userDetails;
        if (!user) {
            throw new Error("could not create user");
        }
        return this.sendResponse(`${loginName} created.`);
    }
}
>>>>>>> 874518de8ab14415c30f38b7101360d1fe341192
