import { getValues } from "./helpers/get-values";

export enum TemplateFieldTypeEnum {
	STRING = "STRING",
	NUMBER = "NUMBER",
	EMAIL = "EMAIL",
	UUID = "UUID",
}

export const TemplateFieldTypeValues = () =>
	getValues<TemplateFieldTypeEnum>(TemplateFieldTypeEnum);
