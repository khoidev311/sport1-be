import { model, Schema } from "mongoose";
import { UserDataType } from "../types/userType";


const userSchema = new Schema<UserDataType>({
    fullname: {type: String, required: true },
    email: {type: String, required: true },
    username:{type: String, required: true, unique: true },
    password: { type: String, select: false, default: "123456" },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
    role:{
          type: Schema.ObjectId,
          ref: 'Role',
        },
});

const UserModel = model("User",userSchema);
export default UserModel;
