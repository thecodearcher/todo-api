import { BaseController } from "../baseController";
import { TodoServices } from "./todoService";

const TodoService = new TodoServices();


export class TodoController extends BaseController {

    public getTodoDetails = async (todo) => {
        return this.sendResponse(todo);
     }
    public createTodo = async (data) => {
       const todo = await TodoService.createTodo(data);
       const { title } = data;
       console.log(todo)
       return this.sendResponse(`${title} created.`);
    }
    public updateTodo = async (id, data:{title:string,body:string}) => {
        const todo = await TodoService.updateTodo(id, data);    
        console.log(todo)
        return this.sendResponse(`${data.title}, created.`);
    }
}

