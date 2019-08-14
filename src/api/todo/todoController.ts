// import { IUser } from ".";
import { BaseController } from "../baseController";
import { todoModal } from "./todoModal";

const todoModel = new todoModal();

/**
 * User controller
 *
 * @export
 * @class UserController
 */
export class todoController extends BaseController {

    public getTodoDetails = async (todo) => {
        return this.sendResponse(todo);
     }
    public createTodo = async (title: string, body?: string) => {
       const todo:any = todoModel.create(title, body);
       if (!todo) {
           throw new Error("could not create todoitem ");
       }
       return this.sendResponse(`${title},${body} created.`);
    //    don't stil get thnis place
    }
    public createMainTodo = async (todoDetails: any) => {
        const todo = todoModel.createDbDetails(todoDetails);
        const { title } = todoDetails;
    
        if (!todo) {
            throw new Error("could not create user");
        }
        return this.sendResponse(`${title}, created.`);
    }
}

