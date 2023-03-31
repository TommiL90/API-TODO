import { Request, Response } from "express";
import { tCreateUser, tLoginReturn, tReturnCreateUser } from "../interfaces/user.interfaces";
import services from "../services";

export const createUserController = async (
  request: Request,
  response: Response
) => {
  const userData: tCreateUser = request.body;

  const newUser: tReturnCreateUser = await services.createUserService(userData);

  return response.status(201).json(newUser);
};

export const loginUserController = async (request: Request, response: Response) => {
  const loginReturn: tLoginReturn = await services.loginUserService(request.body);

  return response.status(200).json(loginReturn);
};
