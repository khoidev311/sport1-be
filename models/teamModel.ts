import { Schema, model } from "mongoose";
import { TeamDataType } from "../types/teamType";

const teamSchema = new Schema<TeamDataType>({
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
})

const TeamModel = model("Team",teamSchema);
export default TeamModel;