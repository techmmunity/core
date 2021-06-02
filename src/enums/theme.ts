import { getValues } from "./helpers/get-values";

export enum ThemeEnum {
	DARK = "DARK",
	LIGHT = "LIGHT",
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ThemeValues = () => getValues<ThemeEnum>(ThemeEnum);
