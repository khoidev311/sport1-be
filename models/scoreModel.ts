import { Schema, model } from "mongoose";
import { ScoreDataType } from "../types/scoreType";

const scoreSchema = new Schema<ScoreDataType>({
    host_team: {
        type: Schema.ObjectId,
        ref: 'Team',
      },
    guest_team: {
        type: Schema.ObjectId,
        ref: 'Team',
      },
    score:  {type: String, required: true },
})

const ScoreModel = model("Score",scoreSchema);
export default ScoreModel;