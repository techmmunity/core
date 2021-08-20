import { getValues } from "./helpers/get-values";

export enum GenderEnum {
	MALE = "MALE",
	FEMALE = "FEMALE",
	OTHER = "OTHER",
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const GenderValues = () => getValues<GenderEnum>(GenderEnum);
