import { getValues } from "./helpers/get-values";

export enum ConfirmationTokenTypeEnum {
	VERIFY_CONTACT = "VERIFY_CONTACT",
	CHANGE_PASSWORD = "CHANGE_PASSWORD",
	REMOVE_CONTACT = "REMOVE_CONTACT",
}

export const ConfirmationTokenTypeValues = () =>
	getValues<ConfirmationTokenTypeEnum>(ConfirmationTokenTypeEnum);
