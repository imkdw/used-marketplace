import express from "express";
import AuthController from "../controllers/auth.controller";
import AuthValidator from "../validators/auth.validator";

const authRouter = express.Router();

authRouter.post("/register", AuthValidator.userRegister, AuthController.register);
authRouter.post("/login", AuthController.login);
authRouter.post("/kakao-login", AuthController.kakaoLogin);

export default authRouter;
