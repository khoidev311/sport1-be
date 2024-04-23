import { model, Schema } from "mongoose";
import { UserDataType } from "../types/userType";

const userSchema = new Schema<UserDataType>({
    fullname: {type: String, required: true },
    email: {type: String, required: true },
    username:{type: String, required: true },
});

const UserModel = model("User",userSchema);
export default UserModel;
