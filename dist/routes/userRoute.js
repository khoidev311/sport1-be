"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controllers/UserController");
const router = express_1.default.Router();
router.get('/', UserController_1.getUsers);
router.get("/:id", UserController_1.getUserById);
router.post("/", UserController_1.createUser);
router.put("/:id", UserController_1.updateUser);
router.delete("/:id", UserController_1.deleteUser);
exports.default = router;
//# sourceMappingURL=userRoute.js.map