import "express-async-errors";
import express, { Application } from "express";
import userRoutes from "./routes/user.routes";
import { errorHandler } from "./error";
import taskRoutes from "./routes/task.routes";


const app: Application = express();
app.use(express.json());

app.use("/users", userRoutes)
app.use("/tasks", taskRoutes)

app.use(errorHandler);

export default app;

