// import { IUser } from ".";
import { BaseController } from "../baseController";

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
}
