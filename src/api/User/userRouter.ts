<<<<<<< HEAD
// import express from "express";
// import { controllerHandler } from "../../shared/controllerHandler";
// // import { logger } from "../../utils/logger";
// import { UserController } from "./userController";
=======
import express from "express";
import { controllerHandler } from "../../shared/controllerHandler";
// import { logger } from "../../utils/logger";
import { UserController } from "./userController";
>>>>>>> 874518de8ab14415c30f38b7101360d1fe341192

// const router = express.Router();
// const call = controllerHandler;
// const User = new UserController();

// router.get("/:id", call(User.getUserDetails, (req, _res, _next) => [req.params.id]));

<<<<<<< HEAD
// router.post("/", call(User.createMainUser, (req, _res, _next) => [req.body]));
//     // tslint:disable-next-line: max-line-length
// export const userRouter = router;
=======
router.post("/", call(User.createMainUser, (req, _res, _next) => [req.body]));
    // tslint:disable-next-line: max-line-length
export const userRouter = router;
>>>>>>> 874518de8ab14415c30f38b7101360d1fe341192
