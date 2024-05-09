import { Schema, model } from "mongoose";
import { LeagueDataType } from "../types/leagueType";

const teamSchema = new Schema<LeagueDataType>({
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

const LeagueModel = model("League",teamSchema);
export default LeagueModel;