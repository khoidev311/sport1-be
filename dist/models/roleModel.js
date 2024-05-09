"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const roleSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
    },
});
const RoleModel = (0, mongoose_1.model)("Role", roleSchema);
exports.default = RoleModel;
//# sourceMappingURL=roleModel.js.map