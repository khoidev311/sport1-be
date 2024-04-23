import { BaseDataType } from "./commonType";

export interface UserDataType extends BaseDataType {
    fullname: string;
    email: string;
    username: string;
  }