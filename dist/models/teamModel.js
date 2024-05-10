"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const teamSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    logo: {
        type: String,
        required: true,
        unique: true,
    }
});
const TeamModel = (0, mongoose_1.model)("Team", teamSchema);
exports.default = TeamModel;
//# sourceMappingURL=teamModel.js.map