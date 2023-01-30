import { Request, Response, NextFunction } from "express";
import ShopService from "../services/shop.service";

export default class ShopController {
  static getShop = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;

    try {
      const shop = await ShopService.getShop(userId);

      res.status(200).json(shop);
    } catch (err: any) {
      console.error(err);
      res.status(err.status || 500).json({ message: err.message });
    }
  };

  static likeProducts = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;

    try {
      const likeProducts = await ShopService.likeProducts(userId);
      res.json();
    } catch (err: any) {
      res.json(err.status || 500).json({ message: err.message });
    }
  };
}
