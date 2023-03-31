import { completeTaskController, createTaskController, deleteTaskController, listTasksByUserIdController } from "./task.controllers";
import { createUserController, loginUserController } from "./user.controllers";

export default { createUserController, loginUserController, createTaskController, listTasksByUserIdController, completeTaskController,deleteTaskController }