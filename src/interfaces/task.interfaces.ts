import { z } from "zod"
import { createTaskSchema, returnCreatetaskSchema, taskSchema } from "../schemas/task.schemas"

export type tTask = z.infer<typeof taskSchema>

export type tCreateTask = z.infer<typeof createTaskSchema>

export type tReturnCreateTask = z.infer<typeof returnCreatetaskSchema>