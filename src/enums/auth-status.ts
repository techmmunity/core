import { getValues } from "./helpers/get-values";

export enum AuthStatusEnum {
	NEED_REGISTER = "NEED_REGISTER",
	CAN_LOGIN = "CAN_LOGIN",
}

export const AuthStatusValues = () => getValues(AuthStatusEnum);
