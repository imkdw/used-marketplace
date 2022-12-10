import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import http from "http";
import winston from "winston";
import expressWinston from "express-winston";
import cors from "cors";
import debug from "debug";

/** 라우터 */
import { CommonRoutesConfig } from "./common/common.routes.config";
import { UsersRoutes } from "./users/users.routes.config";

/** Use .env */
dotenv.config();

const app = express();
const server = http.createServer(app);
const port = process.env.PORT;
const routes: CommonRoutesConfig[] = [];
const debugLog = debug("app");

/** winston 로깅 옵션 지정 */
const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
};

/** 디버그 모드가 아닐시 로그는 한줄로 표현 */
if (!process.env.DEBUG) {
  loggerOptions.meta = false;
}

app.use(express.json());
app.use(cors());
app.use(expressWinston.logger(loggerOptions));

/** 라우터들을 배열로 관리 */
routes.push(new UsersRoutes(app));

const runningMessage = `Server Running at http://localhost:${port}`;
app.get("/", (req, res) => res.status(200).json(runningMessage));

server.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });

  console.log(runningMessage);
});
