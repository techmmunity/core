import { getValues } from "./helpers/get-values";

export enum RarityEnum {
	COMMON = "COMMON",
	RARE = "RARE",
	MYTHICAL = "MYTHICAL",
	LEGENDARY = "LEGENDARY",
	EVENT = "EVENT",
}

export const RarityValues = () => getValues<RarityEnum>(RarityEnum);
