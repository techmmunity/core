import { getValues } from "./helpers/get-values";

export enum StrategyEnum {
	DISCORD = "DISCORD",
	LOCAL = "LOCAL",
	GOOGLE = "GOOGLE",
	GITHUB = "GITHUB",
	LINKEDIN = "LINKEDIN",
}

export const StrategyValues = () => getValues(StrategyEnum);
