import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tCreateUser, tReturnCreateUser } from "../../interfaces/user.interfaces";
import { returnCreateUserSchema } from "../../schemas/user.schemas";

export const createUserService = async (payload: tCreateUser): Promise<tReturnCreateUser> => {
    
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User = userRepo.create(payload)

    await userRepo.save(user)

    return returnCreateUserSchema.parse(user)
}

