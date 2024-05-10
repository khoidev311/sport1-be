"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LeagueController_1 = require("../controllers/LeagueController");
const router = express_1.default.Router();
router.get('/', LeagueController_1.getLeagues);
router.get("/:id", LeagueController_1.getLeagueById);
router.post("/", LeagueController_1.createLeague);
router.put("/:id", LeagueController_1.updateLeague);
router.delete("/:id", LeagueController_1.deleteLeague);
exports.default = router;
//# sourceMappingURL=leagueRoute.js.map