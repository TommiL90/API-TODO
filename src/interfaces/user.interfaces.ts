import { z } from "zod"
import { userSchema, createUserschema, returnCreateUserSchema, loginReturnSchema } from "../schemas/user.schemas"

export type tUser = z.infer<typeof userSchema>

export type tCreateUser = z.infer<typeof createUserschema>

export type tReturnCreateUser = z.infer<typeof returnCreateUserSchema>

export type tLoginUser = Pick<tUser, "email" | "password">

export type tLoginReturn = z.infer<typeof loginReturnSchema>