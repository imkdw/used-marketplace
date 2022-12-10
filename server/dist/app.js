"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const winston_1 = __importDefault(require("winston"));
const express_winston_1 = __importDefault(require("express-winston"));
const cors_1 = __importDefault(require("cors"));
const debug_1 = __importDefault(require("debug"));
const users_routes_config_1 = require("./users/users.routes.config");
/** Use .env */
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const port = process.env.PORT;
const routes = [];
const debugLog = (0, debug_1.default)("app");
/** winston 로깅 옵션 지정 */
const loggerOptions = {
    transports: [new winston_1.default.transports.Console()],
    format: winston_1.default.format.combine(winston_1.default.format.json(), winston_1.default.format.prettyPrint(), winston_1.default.format.colorize({ all: true })),
};
/** 디버그 모드가 아닐시 로그는 한줄로 표현 */
if (!process.env.DEBUG) {
    loggerOptions.meta = false;
}
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_winston_1.default.logger(loggerOptions));
/** 라우터들을 배열로 관리 */
routes.push(new users_routes_config_1.UsersRoutes(app));
const runningMessage = `Server Running at http://localhost:${port}`;
app.get("/", (req, res) => res.status(200).json(runningMessage));
server.listen(port, () => {
    routes.forEach((route) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
    console.log(runningMessage);
});
