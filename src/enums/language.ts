import { getValues } from "./helpers/get-values";

export enum LanguageEnum {
	PT_BR = "PT_BR",
	EN = "EN",
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const LanguageValues = () => getValues<LanguageEnum>(LanguageEnum);
