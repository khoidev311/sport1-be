"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RoleController_1 = require("../controllers/RoleController");
const router = express_1.default.Router();
router.get('/', RoleController_1.getRoles);
router.get("/:id", RoleController_1.getRoleById);
router.post("/", RoleController_1.createRole);
router.put("/:id", RoleController_1.updateRole);
router.delete("/:id", RoleController_1.deleteRole);
exports.default = router;
//# sourceMappingURL=roleRoute.js.map