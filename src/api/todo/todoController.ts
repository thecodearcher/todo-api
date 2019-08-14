import { BaseController } from "../baseController";
import { todoservices } from "./todoService";
const todoServices = new todoservices();
export class todoController extends BaseController {

    public getTodo = async (id) => {
        const findTodo = await todoServices.getTodo(id);
        console.log(findTodo);
        return this.sendResponse(id);
     }
    public createTodo = async (data:{title:string,body:string}) => {
        const todo = await todoServices.createTodo(data);
        console.log(todo);
        return this.sendResponse(`${ data.title }${data.body} created`);
    }
     public updateTodo = async (title, body) => {
        const update = await todoServices.updateTodo(title, body);
        console.log(update);
        return this.sendResponse(`${title} updated`);
     }
}
