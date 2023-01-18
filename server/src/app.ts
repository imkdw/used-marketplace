import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import multer from "multer";

/** 라우터 로드 */
import authRouter from "./routes/auth.router";
import geoRouter from "./routes/geo.router";
import productRouter from "./routes/product.router";

dotenv.config();

const app = express();
app.set("port", process.env.PORT);

/** 이미지 업로드에 사용할 multer 메모리저장소 */
const storage = multer.memoryStorage();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(
  multer({ storage, limits: { fieldSize: 25 * 1024 * 1024 } }).fields([
    { name: "image", maxCount: 4 },
  ])
);

/** 라우터 설정 */
app.use("/auth", authRouter); // 인증관련
app.use("/geo", geoRouter); // 주소관련
app.use("/product", productRouter); // 상품관련

export default app;
