import { getValues } from "./helpers/get-values";

export enum ThemeEnum {
	DARK = "DARK",
	LIGHT = "LIGHT",
}

export const ThemeValues = () => getValues<ThemeEnum>(ThemeEnum);
