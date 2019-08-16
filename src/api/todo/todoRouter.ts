import express from "express";
import { controllerHandler } from "../../shared/controllerHandler";
// import { logger } from "../../utils/logger";
import { TodoController } from "./todoController";

const router = express.Router();
const call = controllerHandler;
const Todo = new TodoController();

router.get("/:id", call(Todo.getTodoDetails, (req, _res, _next) => [req.params.id]));

router.post("/", call(Todo.createTodo, (req, _res, _next) => [req.body]));


export const TodoRouter = router;
