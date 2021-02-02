import { StrategyEnum } from "core/enums/strategy";

export type DecodedToken = {
	id: string;
	discordUserId?: string;
	googleUserId?: string;
	githubUserId?: string;
	linkedinUserId?: string;
	username: string;
	permissions: Array<StrategyEnum>;
};
