import { getValues } from "./helpers/get-values";

export enum RewardsEnum {
	SERVER_BUMP = "SERVER_BUMP",
}

export const RewardsValues = () => getValues<RewardsEnum>(RewardsEnum);
