import { getValues } from "./helpers/get-values";

export enum InterestEnum {
	JAVASCRIPT = "JAVASCRIPT",
	TYPESCRIPT = "TYPESCRIPT",
	PYTHON = "PYTHON",
	JAVA = "JAVA",

	NESTJS = "NESTJS",
	NEXTJS = "NEXTJS",
	DJANGO = "DJANGO",

	CLEAN_CODE = "CLEAN_CODE",

	STYLED_COMPONENTS = "STYLED_COMPONENTS",
}

export const isFrameworkInterest = (interest?: InterestEnum) => {
	switch (interest) {
		case InterestEnum.NESTJS:
		case InterestEnum.NEXTJS:
		case InterestEnum.DJANGO:
			return true;
		default:
			return false;
	}
}

export const isLanguageInterest = (interest?: InterestEnum) => {
	switch (interest) {
		case InterestEnum.JAVASCRIPT:
		case InterestEnum.TYPESCRIPT:
		case InterestEnum.PYTHON:
		case InterestEnum.JAVA:
			return true;
		default:
			return false;
	}
}

export const isConceptInterest = (interest?: InterestEnum) => {
	switch (interest) {
		case InterestEnum.CLEAN_CODE:
			return true;
		default:
			return false;
	}
}

export const isLibraryInterest = (interest?: InterestEnum) => {
	switch (interest) {
		case InterestEnum.STYLED_COMPONENTS:
			return true;
		default:
			return false;
	}
}

export const InterestValues = () => getValues<InterestEnum>(InterestEnum);
