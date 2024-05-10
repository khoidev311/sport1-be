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
exports.deleteTeam = exports.updateTeam = exports.createTeam = exports.getTeamById = exports.getTeams = void 0;
const teamModel_1 = __importDefault(require("../models/teamModel"));
const getTeams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield teamModel_1.default.find({});
        res.status(200).json(roles);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getTeams = getTeams;
const getTeamById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const role = yield teamModel_1.default.findById(id);
        res.status(200).json(role);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getTeamById = getTeamById;
const createTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield teamModel_1.default.create(req.body);
        res.status(200).json(role);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createTeam = createTeam;
const updateTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const role = yield teamModel_1.default.findByIdAndUpdate(id, req.body);
        if (!role) {
            return res.status(404).json({ message: "Team not found" });
        }
        const updatedTeam = yield teamModel_1.default.findById(id);
        res.status(200).json(updatedTeam);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateTeam = updateTeam;
const deleteTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const role = yield teamModel_1.default.findByIdAndDelete(id);
        if (!role) {
            return res.status(404).json({ message: "Team not found" });
        }
        res.status(200).json({ message: "Team deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteTeam = deleteTeam;
//# sourceMappingURL=TeamController.js.map