// import { IUser } from ".";
import { BaseController } from "../baseController";
import { TodoServices } from "./todoService";

const TodoService = new TodoServices();

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
    public createTodo = async (data:{title: string, body: string}) => {
       const todo:any =  TodoService.createTodo(data);
       console.log(todo)
       return this.sendResponse(`${data.title},${data.body} created.`);
    //    don't stil get thnis place
    }
    public updateTodo = async (id, data:{title:string,body:string}) => {
        const todo = TodoService.updateTodo(id, data);    
        console.log(todo)
        return this.sendResponse(`${data.title}, created.`);
    }
}

