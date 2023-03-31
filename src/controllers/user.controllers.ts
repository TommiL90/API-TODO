import { Request, Response } from "express";
import { tCreateUser, tReturnCreateUser } from "../interfaces/user.interfaces";
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
  const token: string = await services.loginUserService(request.body);

  return response.status(200).json({ token: token });
};
