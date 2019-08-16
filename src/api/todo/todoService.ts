import { TodoModel } from "./todoModel";

const TodoModels = TodoModel;

export class TodoServices {
    public getTodo(id) {
       return TodoModels.findAll({ where: { id }});
    }
    public createTodo(data: {title: string, body: string, }) {
       return TodoModels.create({title: data.title,body: data.body,})
        
    }
    public updateTodo(title: string,data:{title: string, body: string,}) {
         return TodoModels.update({title: data.title,body: data.body,},{where: {title},});
    }
}