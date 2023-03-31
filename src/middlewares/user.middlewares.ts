import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../error";

export const verifyEmailExistMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const email: string = request.body.email;

  const userRepo: Repository<User> = AppDataSource.getRepository(User)

  const user = await userRepo.findOneBy({email: email})

  if (user){
    throw new AppError("Email already exists", 409)
  }

  return next()
};
