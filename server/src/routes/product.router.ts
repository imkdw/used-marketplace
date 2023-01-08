import express from "express";
import isAuth from "../middlewares/isAuth";
import ProductController from "../controllers/product.controller";
import ProductValidator from "../validators/product.validator";

const productRouter = express.Router();

productRouter.post("/add", isAuth, ProductValidator.addProduct, ProductController.addProduct);

export default productRouter;
