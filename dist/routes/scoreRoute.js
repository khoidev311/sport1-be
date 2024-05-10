"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ScoreController_1 = require("../controllers/ScoreController");
const router = express_1.default.Router();
router.get('/', ScoreController_1.getScores);
router.get("/:id", ScoreController_1.getScoreById);
router.post("/", ScoreController_1.createScore);
router.put("/:id", ScoreController_1.updateScore);
router.delete("/:id", ScoreController_1.deleteScore);
exports.default = router;
//# sourceMappingURL=scoreRoute.js.map