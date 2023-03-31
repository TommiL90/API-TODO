import { Router } from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";
import { createUserschema, loginSchema } from "../schemas/user.schemas";

const userRoutes: Router = Router();

userRoutes.post("", middlewares.validateBodyMiddleware(createUserschema), middlewares.verifyEmailExistMiddleware, controllers.createUserController)

userRoutes.post("/login", middlewares.validateBodyMiddleware(loginSchema), controllers.loginUserController)

export default userRoutes;