import { Request, Response } from "express";
import { tCreateTask, tTask } from "../interfaces/task.interfaces";
import services from "../services";

export const createTaskController = async (
    request: Request,
    response: Response
  ) => {
    const data: tCreateTask = request.body;
    const { id } = request.user
  
    const newtask: tTask = await services.createTaskService(data, id);
  
    return response.status(201).json(newtask);
  };