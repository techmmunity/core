import { getValues } from "./helpers/get-values";

export enum InterestEnum {
	JAVASCRIPT = "JAVASCRIPT",
	TYPESCRIPT = "TYPESCRIPT",
	PYTHON = "PYTHON",
	JAVA = "JAVA",
}

export const InterestValues = () => getValues(InterestEnum);
