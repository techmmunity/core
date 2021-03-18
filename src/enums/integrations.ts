import { getValues } from "./helpers/get-values";

export enum IntegrationsEnum {
	DISCORD = "DISCORD",
	GOOGLE = "GOOGLE",
	GITHUB = "GITHUB",
	LINKEDIN = "LINKEDIN",
}

export const IntegrationsValues = () => getValues<IntegrationsEnum>(IntegrationsEnum);
