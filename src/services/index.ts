import { completeTaskService } from "./task/completeTask.service";
import { createTaskService } from "./task/createTask.service";
import { deleteTaskService } from "./task/deleteTask.service";
import { listTasksByIdUser } from "./task/listTaskByUser.service";
import { createUserService } from "./user/createUser.service";
import { loginUserService } from "./user/loginUser.service";

export default { createUserService, loginUserService, createTaskService, listTasksByIdUser, completeTaskService, deleteTaskService };
