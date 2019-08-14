import express from "express";
import { controllerHandler } from "../../shared/controllerHandler";
// import { logger } from "../../utils/logger";
import { todoController } from "./todoController";

const router = express.Router();
const call = controllerHandler;
const Todo = new todoController();

router.get("/:id", call(Todo.getTodoDetails, (req, _res, _next) => [req.params.id]));

router.post("/", call(Todo.createTodo, (req, _res, _next) => [req.body]));

// router.put("/:todo", call(Todo.updateTodo, (req, _res, _next) => [req.params.username, req.body]));

// router.delete("/:username", call(User.deleteUser, (req, _res, _next) => [req.params.username]));
export const todoRouter = router;
