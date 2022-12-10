"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "UsersRoutes");
    }
    configureRouters() {
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
exports.UsersRoutes = UsersRoutes;
