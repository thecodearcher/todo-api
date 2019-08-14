
// import { todoService } from "./index"
import { BaseController } from "../baseController";
import { todoService } from "./todoService";
export class todoController extends BaseController { 
  public getTodo = async (id) => {
            return this.sendResponse(id);
         }
  public createTodo = async (data:{title: string, body:any}) => {
       const todo = todoService.createTodo(data);
       return this.sendResponse(`this is the respons ${data.title},${data.body}`);
       console.log(todo)
      }
      public updateTodo = async (id, data:{title: string, body:any}) => {
        const todo =  todoService.updateTodo(id, data.title,data.body);
        return this.sendResponse(todo)
       }  
 }     
