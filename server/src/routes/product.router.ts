import express from "express";
import isAuth from "../middlewares/isAuth";
import ProductController from "../controllers/product.controller";
import ProductValidator from "../validators/product.validator";

const productRouter = express.Router();

/** 상품 추가 */
productRouter.post("/add", isAuth, ProductValidator.addProduct, ProductController.addProduct);

/** 내 상품 목록 가져오기 */
productRouter.get("/my", isAuth, ProductController.myProducts);

/** 상품 추천목록 가져오기 */
productRouter.get("/all", ProductController.allProduct);

/** 상품 상세보기 */
productRouter.get("/:productId", ProductController.productInfo);

/** 상품 수정 */
productRouter.put("/edit/:productId", isAuth, ProductController.editProduct);

export default productRouter;
