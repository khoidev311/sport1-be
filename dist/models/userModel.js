"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, select: false, default: "123456" },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
    role: {
        type: mongoose_1.Schema.ObjectId,
        ref: 'Role',
    },
});
const UserModel = (0, mongoose_1.model)("User", userSchema);
exports.default = UserModel;
//# sourceMappingURL=userModel.js.map