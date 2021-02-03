import { PermissionsEnum } from "core/enums/permissions";

export type DecodedToken = {
	id: string;
	discordUserId?: string;
	googleUserId?: string;
	githubUserId?: string;
	linkedinUserId?: string;
	username: string;
	permissions: Array<PermissionsEnum>;
};
