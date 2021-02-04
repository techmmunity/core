import { getValues } from "./helpers/get-values";

export enum GameficationLogTypeEnum {
	MEGABYTES_PURCHASE = "MEGABYTES_PURCHASE",
	CERTIFICATION_PURCHASE = "CERTIFICATION_PURCHASE",
	BUMP_DISCORD_SERVER = "BUMP_DISCORD_SERVER",
	ANWSER_ARTICLE_QUESTION = "ANWSER_ARTICLE_QUESTION",
	CUSTOM = "CUSTOM",
}


export const GameficationLogTypeValues = () => getValues(GameficationLogTypeEnum);
