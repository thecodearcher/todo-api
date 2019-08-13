import { BaseController } from "../baseController";
import { UserServices } from "./userServices";

const userServices = new UserServices();

/**
 * User controller
 *
 * @export
 * @class UserController
 */
export class UserController extends BaseController {

    public getUserDetails = async (id) => {
        const findUser = await userServices.getUser(id);
        console.log(findUser);
        return this.sendResponse(id);
     }
    public createUserDetails = async (userDetails) => {
        const user = await userServices.createUser(userDetails);
        const {username} = userDetails;
        console.log(user);
        return this.sendResponse(`${ username } created`);
    }
     public updateUser = async (username: string, firstName: string) => {
        const update = await userServices.updateUserDetails(username, firstName);
        console.log(update);
        return this.sendResponse(`${username} updated`);
     }
}
