import { UserDataType } from "./userType";

export interface AuthLoginDataType {
    email: string;
    password: string;
}

export interface AuthRegisterDataType extends UserDataType {
    password: string;
}