// import { IUser } from ".";
import { BaseController } from "../baseController";
import { UserModel } from "./userModel";

const userModel = new UserModel();

/**
 * User controller
 *
 * @export
 * @class UserController
 */
export class UserController extends BaseController {

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
}
