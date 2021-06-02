import { getValues } from "./helpers/get-values";

export enum SeeLaterEnum {
	ARTICLE = "ARTICLE",
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const SeeLaterValues = () => getValues<SeeLaterEnum>(SeeLaterEnum);
