import { todoModel } from "./todoModel"

class todoservice {
    public getTodo(){}
    public updateTodo(id ,title:string,body:string){
      todoModel.update(id, { where: {id:id}})
    }
    public createTodo(data:{title:string,body:string}){    
      todoModel.create({ title: data.title, body: data.body })
    } 
}
export const todoService = new todoservice()