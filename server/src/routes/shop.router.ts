import express from "express";
import ShopController from "../controllers/shop.controller";

const shopRouter = express.Router();

/** 상점 정보 가져오기 */
shopRouter.get("/:userId", ShopController.getShop);

/** 상점 찜 목록 가져오기 */
shopRouter.get("/like/:userId", ShopController.likeProducts);

export default shopRouter;
