"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const registerSchema = new mongoose_1.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true, default: '123456' },
});
const AuthRegisterModel = (0, mongoose_1.model)("AuthRegister", registerSchema);
exports.default = AuthRegisterModel;
//# sourceMappingURL=authRegisterModel.js.map