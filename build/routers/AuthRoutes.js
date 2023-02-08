"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./BaseRouter"));
const AuthValidator_1 = __importDefault(require("../middlewares/AuthValidator"));
const AuthMiddleware_1 = require("../middlewares/AuthMiddleware");
//Controllers
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
class AuthRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("/register", AuthValidator_1.default, AuthController_1.default.register);
        this.router.post("/login", AuthValidator_1.default, AuthController_1.default.login);
        this.router.get("/profile", AuthMiddleware_1.auth, AuthController_1.default.profile);
    }
}
exports.default = new AuthRoutes().router;
