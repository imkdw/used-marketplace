import { Request, Response, NextFunction } from "express";

export default class ShopController {
  static getShop = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;
  };
}
