import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Task } from "../../entities";
import { AppError } from "../../error";

export const completeTaskService = async (taskId: number): Promise<Task> => {
  const taskRepo: Repository<Task> = AppDataSource.getRepository(Task);

  const task: Task | null = await taskRepo.findOneBy({
    id: taskId,
  });

  if (!task) {
    throw new AppError("task not found", 404);
  }

  task.completed = true;

  await taskRepo.save(task);

  return task
};
