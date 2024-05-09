import { AuthRegisterDataType } from '../types/authType';
import { model, Schema } from "mongoose";


const registerSchema = new Schema<AuthRegisterDataType>({
    fullname: {type: String, required: true },
    email: {type: String, required: true },
    username:{type: String, required: true },
    password:{type: String, required: true, default:'123456' },
});

const AuthRegisterModel = model("AuthRegister",registerSchema);
export default AuthRegisterModel;
