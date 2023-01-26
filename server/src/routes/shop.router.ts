import express from "express";
import ShopController from "../controllers/shop.controller";

const shopRouter = express.Router();

shopRouter.get("/:userId", ShopController.getShop);

export default shopRouter;
