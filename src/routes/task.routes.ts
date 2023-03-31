import { Router } from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";
import { createTaskSchema } from "../schemas/task.schemas";

const taskRoutes: Router = Router();

taskRoutes.post("", middlewares.validateTokenMiddleware, middlewares.validateBodyMiddleware(createTaskSchema), controllers.createTaskController)

export default taskRoutes;