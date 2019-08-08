import express from "express";
import { controllerHandler } from "../../shared/controllerHandler";
import { todoController } from "./todoController";
const router = express.Router();
const call = controllerHandler;
const todo = new todoController();

router.get("/:todo", call(todo.getTodoDetails, (req, _res, _next) => [req.params.todo]));

router.post("/", call(todo.createMainTodo, (req, _res, _next) => [req.body]));
    // tslint:disable-next-line: max-line-length
export const todoRouter = router;
