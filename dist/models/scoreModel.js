"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const scoreSchema = new mongoose_1.Schema({
    host_team: {
        type: mongoose_1.Schema.ObjectId,
        ref: 'Team',
    },
    guest_team: {
        type: mongoose_1.Schema.ObjectId,
        ref: 'Team',
    },
    score: { type: String, required: true },
});
const ScoreModel = (0, mongoose_1.model)("Score", scoreSchema);
exports.default = ScoreModel;
//# sourceMappingURL=scoreModel.js.map