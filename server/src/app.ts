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

app.use("/auth", authRouter);

function test(denum1: number, num1: number, denum2: number, num2: number) {
  const [a, b] = [denum1 / num1, denum2 / num2];
  const sum = a + b;
  const sumSplit = String(sum).split(".");
  console.log(sumSplit);
}

test(1, 2, 3, 4);

export default app;
