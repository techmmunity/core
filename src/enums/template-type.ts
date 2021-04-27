import { getValues } from "./helpers/get-values";

export enum TemplateTypeEnum {
	EMAIL = "EMAIL",
	SMS = "SMS",
	WHATSAPP = "WHATSAPP",
	DISCORD_MESSAGE = "DISCORD_MESSAGE",
}

export const TemplateTypeValues = () =>
	getValues<TemplateTypeEnum>(TemplateTypeEnum);
