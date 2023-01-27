import axios from "axios";
import ShopModel from "../models/shop.model";

export default class ShopService {
  static getShop = async (userId: string) => {
    try {
      const shop = ShopModel.getShop(userId);
      return shop;
    } catch (err: any) {}
  };
}
