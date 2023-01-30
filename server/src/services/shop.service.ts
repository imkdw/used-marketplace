import axios from "axios";
import ShopModel from "../models/shop.model";
import PorductModel from "../models/product.model";
import snakeToCamel from "../modules/snakeToCamel";

export default class ShopService {
  static getShop = async (userId: string) => {
    try {
      const tempShop: any = {};
      /** users 테이블 조회해서 데이터 가져오기 */
      const shop = await ShopModel.getShop(userId);

      /** shop key를 camelCase로 변환 */
      for (const item in shop[0]) {
        const key = snakeToCamel(item);
        tempShop[key] = shop[0][item];
      }

      /** 유저 아이디로 가져온 이메일로 상품 가져오기 */
      const products = await ShopModel.shopProducts(shop[0].email);

      /** 상품 썸네일 이미지 가져오기 */
      const sumbnails = await Promise.all(
        products.map(async (product) => {
          const images = await PorductModel.myProductsImage(product.product_id);
          const sumbnail = images.filter((image) => image.is_sumbnail === 1);

          return sumbnail[0].image_url;
        })
      );

      /** 상품에 썸네일 이미지 추가 */
      const productsWithImage = products.map((product, index) => {
        const tempProduct: any = {};

        /** camelCase로 변환 */
        for (const item in product) {
          const key = snakeToCamel(item);
          tempProduct[key] = product[item];
        }

        return { ...tempProduct, sumbnail: sumbnails[index] };
      });

      return {
        shop: { ...tempShop },
        products: productsWithImage,
      };
    } catch (err: any) {}
  };

  static likeProducts = async (userId: string) => {
    const likeProductId = await ShopModel.likeProductId(userId);
    console.log(likeProductId);
  };
}
