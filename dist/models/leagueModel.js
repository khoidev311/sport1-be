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
const LeagueModel = (0, mongoose_1.model)("League", teamSchema);
exports.default = LeagueModel;
//# sourceMappingURL=leagueModel.js.map