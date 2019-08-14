import { todoModel } from "./todoModel";

const TodoModel = todoModel;

class todoservices {
    public getTodo(id) {
        TodoModel.findAll({ where: { id }});
    }
    public createTodo(data: {title: string, body: string, }) {
        TodoModel.create({title: data.title,body: data.body,})
    }
    public updateTodo(title: string,data:{title: string, body: string,}) 
             {todoModel.update({title: data.title,body: data.body,},{where: {title},});
    }
}
export { todoservices }