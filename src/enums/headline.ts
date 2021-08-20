import { getValues } from "./helpers/get-values";

export enum HeadlineEnum {
	/**
	 * Programming
	 */

	CTO = "CTO",
	TECH_MANAGER = "TECH_MANAGER",
	TECH_LEADER = "TECH_LEADER",
	FULL_STACK_DEV = "FULL_STACK_DEV",
	FRONT_END_DEV = "FRONT_END_DEV",
	BACK_END_DEV = "BACK_END_DEV",
	GAME_DEV = "GAME_DEV",
	QUALITY_ASSURANCE = "QUALITY_ASSURANCE",

	/**
	 * Graphic Design
	 */

	ANIMATOR = "ANIMATOR",
	GRAPHIC_DESIGNER = "GRAPHIC_DESIGNER",
	ILLUSTRATOR = "ILLUSTRATOR",
	GAME_DESIGNER = "GAME_DESIGNER",
	DIGITAL_SCULPTOR = "DIGITAL_SCULPTOR",

	/**
	 * Sound Design
	 */

	SOUND_DESIGNER = "SOUND_DESIGNER",

	/**
	 * Robotic Engineering
	 */

	ROBOTIC_ENGINEER = "ROBOTIC_ENGINEER",

	/**
	 * Management
	 */

	CEO = "CEO",
	RECRUITER = "RECRUITER",
	PRODUCT_MANAGER = "PRODUCT_MANAGER",
	PRODUCT_OWNER = "PRODUCT_OWNER",

	/**
	 * Marketing
	 */

	CPO = "CPO",
	SOCIAL_MEDIA = "SOCIAL_MEDIA",
}

export const isProgrammingHeadline = (headline?: HeadlineEnum) => {
	switch (headline) {
		case HeadlineEnum.BACK_END_DEV:
		case HeadlineEnum.CTO:
		case HeadlineEnum.FRONT_END_DEV:
		case HeadlineEnum.FULL_STACK_DEV:
		case HeadlineEnum.GAME_DEV:
		case HeadlineEnum.QUALITY_ASSURANCE:
		case HeadlineEnum.TECH_LEADER:
		case HeadlineEnum.TECH_MANAGER:
			return true;
		default:
			return false;
	}
};

export const isGraphicDesignerHeadline = (headline?: HeadlineEnum) => {
	switch (headline) {
		case HeadlineEnum.ANIMATOR:
		case HeadlineEnum.GRAPHIC_DESIGNER:
		case HeadlineEnum.GAME_DESIGNER:
		case HeadlineEnum.ILLUSTRATOR:
		case HeadlineEnum.DIGITAL_SCULPTOR:
			return true;
		default:
			return false;
	}
};

export const isSoundDesignerHeadline = (headline?: HeadlineEnum) => {
	switch (headline) {
		case HeadlineEnum.SOUND_DESIGNER:
			return true;
		default:
			return false;
	}
};

export const isRoboticEngineeringHeadline = (headline?: HeadlineEnum) => {
	switch (headline) {
		case HeadlineEnum.ROBOTIC_ENGINEER:
			return true;
		default:
			return false;
	}
};

export const isManagementHeadline = (headline?: HeadlineEnum) => {
	switch (headline) {
		case HeadlineEnum.CEO:
		case HeadlineEnum.RECRUITER:
		case HeadlineEnum.PRODUCT_OWNER:
		case HeadlineEnum.PRODUCT_MANAGER:
			return true;
		default:
			return false;
	}
};

export const isMarketingHeadline = (headline?: HeadlineEnum) => {
	switch (headline) {
		case HeadlineEnum.CPO:
		case HeadlineEnum.SOCIAL_MEDIA:
			return true;
		default:
			return false;
	}
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const HeadlineValues = () => getValues<HeadlineEnum>(HeadlineEnum);
