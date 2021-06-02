import { getValues } from "./helpers/get-values";

export enum ContactTypeEnum {
	EMAIL = "EMAIL",
	PHONE_NUMBER = "PHONE_NUMBER",
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ContactTypeValues = () =>
	getValues<ContactTypeEnum>(ContactTypeEnum);
