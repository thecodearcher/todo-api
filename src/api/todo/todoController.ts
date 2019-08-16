import { BaseController } from "../baseController";
import { TodoServices } from "./todoService";

const TodoService = new TodoServices();


export class TodoController extends BaseController {

    public getTodoDetails = async (todo) => {
        return this.sendResponse(todo);
     }
    public createTodo = async (data:{title: string, body: string}) => {
        const todo = TodoService.createTodo(data);
       console.log(todo)
       return this.sendResponse(`${data.title},${data.body} created.`);
    }
    public updateTodo = async (id, data:{title:string,body:string}) => {
        const todo = TodoService.updateTodo(id, data);    
        console.log(todo)
        return this.sendResponse(`${data.title}, created.`);
    }
}

