import { AppError } from "./../../utils/app-error";
import Joi from "@hapi/joi";
import express from "express";
import { controllerHandler } from "../../shared/controllerHandler";
import { UserController } from "./userController";
import { schema } from "./userValidator";

const router = express.Router();
const call = controllerHandler;
const User = new UserController();

router.use((req, res, next) => {
    Joi.validate(req.body, schema, (err, value) => {
        if (err) {
            console.log(req.body);
            err.details.forEach( (elem) => {
                throw new AppError(elem.message);
            });
        } else {
            next();
        }
    });
});
router.get("/:id", call(User.getUserDetails, (req, _res, _next) => [req.params.id]));

router.post("/", call(User.createUserDetails, (req, _res, _next) => [req.body]));

router.put("/:username", call(User.updateUser, (req, _res, _next) => [req.params.username, req.body]));

// router.delete("/:username", call(User.deleteUser, (req, _res, _next) => [req.params.username]));
export const userRouter = router;
