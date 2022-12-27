import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

import authRouter from "./routes/auth.router";

dotenv.config();

const app = express();
app.set("port", process.env.PORT);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// 인증 관련 라우터
app.use("/auth", authRouter);

export default app;
