import express from "express";
import { controllerHandler } from "../../shared/controllerHandler";
import { UserController } from "./userController";

const router = express.Router();
const call = controllerHandler;
const User = new UserController();

router.get("/:id", call(User.getUserDetails, (req, _res, _next) => [req.params.id]));

export const userRouter = router;
