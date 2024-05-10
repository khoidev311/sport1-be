"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TeamController_1 = require("../controllers/TeamController");
const router = express_1.default.Router();
router.get('/', TeamController_1.getTeams);
router.get("/:id", TeamController_1.getTeamById);
router.post("/", TeamController_1.createTeam);
router.put("/:id", TeamController_1.updateTeam);
router.delete("/:id", TeamController_1.deleteTeam);
exports.default = router;
//# sourceMappingURL=teamRoute.js.map