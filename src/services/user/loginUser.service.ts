import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../error";
import { tLoginReturn, tLoginUser } from "../../interfaces/user.interfaces";
import { loginReturnSchema } from "../../schemas/user.schemas";

export const loginUserService = async (
  payload: tLoginUser
): Promise<tLoginReturn> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ email: payload.email });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const pwdMatch: boolean = await compare(payload.password, user.password);

  if (!pwdMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = sign(
    { admin: user.admin },
    String(process.env.SECRET_KEY),
    { expiresIn: "72h", subject: String(user.id) }
  );

  const returnLogin = loginReturnSchema.parse({
    ...user,
    token: token
  })

  return returnLogin
};
