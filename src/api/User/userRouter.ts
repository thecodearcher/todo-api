import express from "express";
import { controllerHandler } from "../../shared/controllerHandler";
// import { logger } from "../../utils/logger";
import { UserController } from "./userController";

const router = express.Router();
const call = controllerHandler;
const User = new UserController();

router.get("/:id", call(User.getUserDetails, (req, _res, _next) => [req.params.id]));

router.post("/", call(User.createMainUser, (req, _res, _next) => [req.body]));
    // tslint:disable-next-line: max-line-length
export const userRouter = router;
