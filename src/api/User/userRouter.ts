import express from "express";
import { controllerHandler } from "../../shared/controllerHandler";
// import { logger } from "../../utils/logger";
import { UserController } from "./userController";

const router = express.Router();
const call = controllerHandler;
const User = new UserController();

router.get("/:id", call(User.getUserDetails, (req, _res, _next) => [req.params.id]));

router.post("/", call(User.createUserDetails, (req, _res, _next) => [req.body]));

router.put("/:username", call(User.updateUser, (req, _res, _next) => [req.params.username, req.body]));

// router.delete("/:username", call(User.deleteUser, (req, _res, _next) => [req.params.username]));
export const userRouter = router;
