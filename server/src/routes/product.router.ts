import express from "express";
import ProductController from "../controllers/product.controller";

const productRouter = express.Router();

productRouter.post("/add", ProductController.addProduct);

export default productRouter;
