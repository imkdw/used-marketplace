import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import authRouter from "./routes/auth.router";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);

app.listen(port, () => console.log(`App Running on localhost:${port}`));
