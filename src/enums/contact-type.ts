import { getValues } from "./helpers/get-values";

export enum ContactTypeEnum {
	EMAIL = "EMAIL",
	PHONE_NUMBER = "PHONE_NUMBER",
}

export const ContactTypeValues = () => getValues<ContactTypeEnum>(ContactTypeEnum);
