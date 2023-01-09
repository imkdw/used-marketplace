import express from "express";
import isAuth from "../middlewares/isAuth";
import ProductController from "../controllers/product.controller";
import ProductValidator from "../validators/product.validator";

const productRouter = express.Router();

/** 상품 추가 */
productRouter.post("/add", isAuth, ProductValidator.addProduct, ProductController.addProduct);

/** 내 상품 목록 가져오기 */
productRouter.get("/my", isAuth, ProductController.myProducts);

export default productRouter;
