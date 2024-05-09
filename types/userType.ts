import { BaseDataType } from "./commonType";
import { RoleDataType } from "./roleType";

export interface UserDataType extends BaseDataType {
    fullname: string;
    email: string;
    username: string;
    password: string;
    role: RoleDataType;
  }