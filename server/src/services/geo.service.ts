import axios from "axios";
import { ncpConfig } from "../config/config";

export default class GeoService {
  static coordToAddress = async (latitude: string, longitude: string) => {
    const url = `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${longitude},${latitude}&sourcecrs=epsg:4326&orders=legalcode&output=json`;

    try {
      const res = await axios.get(url, {
        headers: {
          "X-NCP-APIGW-API-KEY-ID": ncpConfig.apiKeyId,
          "X-NCP-APIGW-API-KEY": ncpConfig.apiKey,
        },
      });

      if (res.status === 200) {
        const { region } = res.data.results[0];

        return {
          sido: region.area1.name,
          sigungu: region.area2.name,
          bname: region.area3.name,
        };
      }
    } catch (err: any) {
      throw {
        status: err.code,
        message: err.message,
      };
    }
  };
}
