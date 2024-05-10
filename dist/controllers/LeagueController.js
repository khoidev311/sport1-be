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
exports.deleteLeague = exports.updateLeague = exports.createLeague = exports.getLeagueById = exports.getLeagues = void 0;
const leagueModel_1 = __importDefault(require("../models/leagueModel"));
const getLeagues = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield leagueModel_1.default.find({});
        res.status(200).json(roles);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getLeagues = getLeagues;
const getLeagueById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const role = yield leagueModel_1.default.findById(id);
        res.status(200).json(role);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getLeagueById = getLeagueById;
const createLeague = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield leagueModel_1.default.create(req.body);
        res.status(200).json(role);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createLeague = createLeague;
const updateLeague = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const role = yield leagueModel_1.default.findByIdAndUpdate(id, req.body);
        if (!role) {
            return res.status(404).json({ message: "League not found" });
        }
        const updatedLeague = yield leagueModel_1.default.findById(id);
        res.status(200).json(updatedLeague);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateLeague = updateLeague;
const deleteLeague = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const role = yield leagueModel_1.default.findByIdAndDelete(id);
        if (!role) {
            return res.status(404).json({ message: "League not found" });
        }
        res.status(200).json({ message: "League deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteLeague = deleteLeague;
//# sourceMappingURL=LeagueController.js.map