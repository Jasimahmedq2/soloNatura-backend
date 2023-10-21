"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const product_validation_1 = require("./product.validation");
const router = express_1.default.Router();
router.post("/create-product", (0, validateRequest_1.default)(product_validation_1.productValidation.createProduct), product_controller_1.productControllers.createProduct);
router.get("/", product_controller_1.productControllers.retrieveProduct);
router.get("/supplements", product_controller_1.productControllers.retrieveSupplementsProduct);
router.get("/:id", product_controller_1.productControllers.retrieveSingleProduct);
exports.productRoutes = router;
