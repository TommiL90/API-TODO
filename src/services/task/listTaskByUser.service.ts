import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Task } from "../../entities";

export const listTasksByIdUser = async (idUser: number): Promise<Array<Task>> => {
  const taskRepo: Repository<Task> = AppDataSource.getRepository(Task);

  const tasks: Array<Task> = await taskRepo.find({
    where: {
      user: {
        id: idUser,
      },
    }
  });

  return tasks;
};
