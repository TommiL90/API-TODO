import { Request, Response } from "express";
import { Task } from "../entities";
import { tCreateTask, tTask } from "../interfaces/task.interfaces";
import services from "../services";

export const createTaskController = async (
  request: Request,
  response: Response
) => {
  const data: tCreateTask = request.body;
  const { id } = request.user;

  const newtask: Omit<tTask, "user"> = await services.createTaskService(data, id);

  return response.status(201).json(newtask);
};

export const listTasksByUserIdController = async (
  request: Request,
  response: Response
) => {
  const id: number = request.user.id;

  const taskList: Array<Task> = await services.listTasksByIdUser(id);

  return response.status(200).json(taskList);
};

export const completeTaskController = async (
  request: Request,
  response: Response
) => {
  const id: number = +request.params.id;

  const taskList: Task = await services.completeTaskService(id);

  return response.status(200).json(taskList);
};

export const deleteTaskController = async (
    request: Request,
    response: Response
  ) => {
    const id: number = +request.params.id;
  
     await services.deleteTaskService(id);
  
    return response.status(204).send();
  };
