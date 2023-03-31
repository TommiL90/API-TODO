import { verifyEmailExistMiddleware } from "./user.middlewares";
import validateBodyMiddleware from "./validateBody.middleware";
import { validateTokenMiddleware } from "./validateToken.middleware";

export default { validateBodyMiddleware, verifyEmailExistMiddleware, validateTokenMiddleware }