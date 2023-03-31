import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Task } from "../../entities"
import { AppError } from "../../error"

export const deleteTaskService = async (idTask: number): Promise<void> => {

    const taskRepository: Repository<Task> = AppDataSource.getRepository(Task)

    const task: Task | null = await taskRepository.findOne({
        where: {
            id: idTask
        }
    })

    if (!task) {
        throw new AppError("task not found", 404);
      }

    await taskRepository.remove(task)

}

