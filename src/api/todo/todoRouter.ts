import express from "express";
import { controllerHandler } from "../../shared/controllerHandler";
// import { logger } from "../../utils/logger";
import { todoController } from "./todoController";

const router = express.Router();
const call = controllerHandler;
const todo = new todoController();

router.get("/:id", call(todo.getTodo, (req, _res, _next) => [req.params.id]));

router.post("/", call(todo.createTodo, (req, _res, _next) => [req.body]));

router.put("/:todo", call(todo.updateTodo, (req, _res, _next) => [req.params.username, req.body]));

// router.delete("/:username", call(User.deleteUser, (req, _res, _next) => [req.params.username]));
export const todoRouter = router;
