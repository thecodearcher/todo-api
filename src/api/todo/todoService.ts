import { TodoModel } from "./todoModel";

const TodoModels = TodoModel;

export class TodoServices {
    public getTodo(id) {
        TodoModels.findAll({ where: { id }});
    }
    public createTodo(data: {title: string, body: string, }) {
        TodoModels.create({title: data.title,body: data.body,})
    }
    public updateTodo(title: string,data:{title: string, body: string,}) {
          TodoModels.update({title: data.title,body: data.body,},{where: {title},});
    }
}
// export { TodoServices }