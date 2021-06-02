import { getValues } from "./helpers/get-values";

export enum ApplicationEnum {
	UNIQUE_LOGIN_SYSTEM = "UNIQUE_LOGIN_SYSTEM",
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ApplicationValues = () =>
	getValues<ApplicationEnum>(ApplicationEnum);
