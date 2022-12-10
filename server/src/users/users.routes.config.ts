import { CommonRoutesConfig } from "../common/common.routes.config";
import express, { Request, Response, NextFunction } from "express";

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "UsersRoutes");
  }

  configureRouters(): express.Application {
    this.app
      .route("/users")
      .get((req, res) => {
        res.status(200).json("[GET] /users");
      })
      .post((req, res) => {
        res.status(200).json("[POST] /users");
      });

    this.app
      .route("/users/:userId")
      .all((req, res, next) => {
        next();
      })
      .get((req, res) => {
        res.status(200).json(`[GET] request for id ${req.params.userId}`);
      });

    return this.app;
  }
}
