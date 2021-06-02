import { getValues } from "./helpers/get-values";

export enum RewardsEnum {
	SERVER_BUMP = "SERVER_BUMP",
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const RewardsValues = () => getValues<RewardsEnum>(RewardsEnum);
