import express from "express";
import GeoController from "../controllers/geo.controller";

const geoRouter = express.Router();

geoRouter.get("/coord-to-address?:coords", GeoController.coordToAddress);

export default geoRouter;
