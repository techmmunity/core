import { getValues } from "./helpers/get-values";

export enum TechmmunitySectorEnum {
	PROGRAMMING = "PROGRAMMING",
	GRAPHIC_DESIGN = "GRAPHIC_DESIGN",
	SOUND_DESIGN = "SOUND_DESIGN",
	ROBOTIC_ENGINEERING = "ROBOTIC_ENGINEERING",
	MANAGEMENT = "MANAGEMENT",
	MARKETING = "MARKETING",
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const TechmmunitySectorValues = () =>
	getValues<TechmmunitySectorEnum>(TechmmunitySectorEnum);
