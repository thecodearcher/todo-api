import express from "express";

import { controllerHandler } from "../../shared/controllerHandler";
// import { logger } from "../../utils/logger";
import { todoController } from "./todoController";

const router = express.Router();
const call = controllerHandler;
const todo = new todoController();

router.get("/todo", call(todo.getTodo, (req, _res, _next) => [req.params.id]));

router.put("/:id", call(todo.updateTodo, (req, _res, _next) => [req.body,req.params.id]));
router.post("/", call(todo.createTodo, (req, _res, _next) => [req.body]));
    
export const todoRouter =   router;