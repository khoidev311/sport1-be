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
exports.deleteRole = exports.updateRole = exports.createRole = exports.getRoleById = exports.getRoles = void 0;
const roleModel_1 = __importDefault(require("../models/roleModel"));
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield roleModel_1.default.find({});
        res.status(200).json(roles);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getRoles = getRoles;
const getRoleById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const role = yield roleModel_1.default.findById(id);
        res.status(200).json(role);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getRoleById = getRoleById;
const createRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield roleModel_1.default.create(req.body);
        res.status(200).json(role);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createRole = createRole;
const updateRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const role = yield roleModel_1.default.findByIdAndUpdate(id, req.body);
        if (!role) {
            return res.status(404).json({ message: "Role not found" });
        }
        const updatedRole = yield roleModel_1.default.findById(id);
        res.status(200).json(updatedRole);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateRole = updateRole;
const deleteRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const role = yield roleModel_1.default.findByIdAndDelete(id);
        if (!role) {
            return res.status(404).json({ message: "Role not found" });
        }
        res.status(200).json({ message: "Role deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteRole = deleteRole;
//# sourceMappingURL=RoleController.js.map