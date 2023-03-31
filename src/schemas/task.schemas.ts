import { z } from "zod";
import { userSchema } from "./user.schemas";

export const taskSchema = z.object({
  id: z.number().positive().int(),
  title: z.string().max(45),
  description: z.string().max(300),
  user: userSchema,
  createdAt: z.string(),
  updatedAt: z.string().nullish(),
});

export const createTaskSchema = taskSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    user: true
})
 export const returnCreatetaskSchema = taskSchema.omit({
    user: true
 })