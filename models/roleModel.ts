import { Schema, model } from "mongoose";
import { RoleDataType } from "../types/roleType";

const roleSchema = new Schema<RoleDataType>(
    {
      name: {
        type: String,
        required: true,
        unique: true,
      },
      slug: {
        type: String,
      },
    }
  );
  const RoleModel = model("Role", roleSchema);
  export default RoleModel;