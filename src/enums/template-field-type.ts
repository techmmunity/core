import { getValues } from "./helpers/get-values";

export enum TemplateFieldTypeEnum {
	STRING = "STRING",
	NUMBER = "NUMBER",
	EMAIL = "EMAIL",
	UUID = "UUID",
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const TemplateFieldTypeValues = () =>
	getValues<TemplateFieldTypeEnum>(TemplateFieldTypeEnum);
