import { Router } from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";
import { createTaskSchema } from "../schemas/task.schemas";

const taskRoutes: Router = Router();

taskRoutes.post("", middlewares.validateTokenMiddleware, middlewares.validateBodyMiddleware(createTaskSchema), controllers.createTaskController)

taskRoutes.post("", middlewares.validateTokenMiddleware, controllers.listTasksByUserIdController)

taskRoutes.patch("/:id", middlewares.validateTokenMiddleware, controllers.completeTaskController)

taskRoutes.delete("/:id", middlewares.validateTokenMiddleware, controllers.deleteTaskController)


export default taskRoutes;