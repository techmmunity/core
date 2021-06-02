import { getValues } from "./helpers/get-values";

export enum IntegrationsEnum {
	DISCORD = "DISCORD",
	GOOGLE = "GOOGLE",
	GITHUB = "GITHUB",
	LINKEDIN = "LINKEDIN",
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const IntegrationsValues = () =>
	getValues<IntegrationsEnum>(IntegrationsEnum);
