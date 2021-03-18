import { getValues } from "./helpers/get-values";

export enum LanguageEnum {
	PT_BR = "PT_BR",
	EN = "EN",
}

export const LanguageValues = () => getValues<LanguageEnum>(LanguageEnum);
