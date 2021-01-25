import { getValues } from "./helpers/get-values";

export enum ArticleTagEnum {
	JAVASCRIPT = "JAVASCRIPT",
}

export const ArticleTagValues = () => getValues(ArticleTagEnum);
