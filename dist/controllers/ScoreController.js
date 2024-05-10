"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteScore = exports.updateScore = exports.createScore = exports.getScoreById = exports.getScores = void 0;
const scoreModel_1 = __importDefault(require("../models/scoreModel"));
const getScores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield scoreModel_1.default.find({}).populate({ path: "host_team", model: "Team" }).populate({ path: "guest_team", model: "Team" });
        res.status(200).json(roles);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getScores = getScores;
const getScoreById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const role = yield scoreModel_1.default.findById(id);
        res.status(200).json(role);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getScoreById = getScoreById;
const createScore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield scoreModel_1.default.create(req.body);
        res.status(200).json(role);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createScore = createScore;
const updateScore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const role = yield scoreModel_1.default.findByIdAndUpdate(id, req.body);
        if (!role) {
            return res.status(404).json({ message: "Score not found" });
        }
        const updatedScore = yield scoreModel_1.default.findById(id);
        res.status(200).json(updatedScore);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateScore = updateScore;
const deleteScore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const role = yield scoreModel_1.default.findByIdAndDelete(id);
        if (!role) {
            return res.status(404).json({ message: "Score not found" });
        }
        res.status(200).json({ message: "Score deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteScore = deleteScore;
//# sourceMappingURL=ScoreController.js.map