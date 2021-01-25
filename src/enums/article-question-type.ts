import { getValues } from "./helpers/get-values";

export enum ArticleQuestionTypeEnum {
	EXACT_TEXT = "EXACT_TEXT",
	MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
	TRUE_FALSE = "TRUE_FALSE",
	FILL_IN_THE_BLANK = "FILL_IN_THE_BLANK",
	MATCHING = "MATCHING",
}

export const ArticleQuestionTypeValues = () =>
	getValues(ArticleQuestionTypeEnum);
