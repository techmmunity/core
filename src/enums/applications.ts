import { getValues } from "./helpers/get-values";

export enum ApplicationEnum {
	UNIQUE_LOGIN_SYSTEM = "UNIQUE_LOGIN_SYSTEM",
}

export const ApplicationValues = () =>
	getValues<ApplicationEnum>(ApplicationEnum);
