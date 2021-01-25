import { getValues } from "./helpers/get-values";

export enum SeeLaterEnum {
	ARTICLE = "ARTICLE",
}

export const SeeLaterValues = () => getValues(SeeLaterEnum);
