import { Request, Response, NextFunction } from "express";
import GeoService from "../services/geo.service";

export default class GeoController {
  static coordToAddress = async (req: Request, res: Response, next: NextFunction) => {
    const coords = String(req.query.coords).split(",");
    const [latitude, longitude] = [coords[0], coords[1]];

    try {
      const address = await GeoService.coordToAddress(latitude, longitude);
      res.json(address);
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  };
}
