import { getValues } from "./helpers/get-values";

export enum RarityEnum {
	COMMON = "COMMON",
	RARE = "RARE",
	MYTHICAL = "MYTHICAL",
	LEGENDARY = "LEGENDARY",
	EVENT = "EVENT",
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const RarityValues = () => getValues<RarityEnum>(RarityEnum);
