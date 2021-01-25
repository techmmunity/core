import { getValues } from "./helpers/get-values";

export enum CommentTypeEnum {
	ARTICLE = "ARTICLE",
	COURSE = "COURSE",
	COURSE_PAGE = "COURSE_PAGE",
	COURSE_MODULE = "COURSE_MODULE",
	COURSE_CHAPTER = "COURSE_CHAPTER",
	BOOK = "BOOK",
	BOOK_PAGE = "BOOK_PAGE",
	QUESTION = "QUESTION",
}

export const CommentTypeValues = () => getValues(CommentTypeEnum);
