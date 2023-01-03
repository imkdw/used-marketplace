import express from "express";
import ProductController from "../controllers/product.controller";
import ProductValidator from "../validators/product.validator";

const productRouter = express.Router();

productRouter.post("/add", ProductValidator.addProduct, ProductController.addProduct);

export default productRouter;
