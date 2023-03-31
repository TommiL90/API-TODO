import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Task, User } from "../../entities"
import { AppError } from "../../error"
import { tCreateTask, tReturnCreateTask } from "../../interfaces/task.interfaces"
import { returnCreatetaskSchema } from "../../schemas/task.schemas"


export const createTaskService = async (payload: tCreateTask, idUser: number): Promise<tReturnCreateTask> => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null  = await userRepo.findOneBy({id: idUser})

    if (!user) {
        throw new AppError("user not found", 404);
      }
    
    const taskRepo: Repository<Task> = AppDataSource.getRepository(Task)

    const task: Task = taskRepo.create({
        ...payload,
        user: user
    })

    await taskRepo.save(task)

    return returnCreatetaskSchema.parse(task)
}

