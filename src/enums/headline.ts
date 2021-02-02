import { getValues } from "./helpers/get-values";

export enum HeadlineEnum {
	CTO = "CTO",
	TECH_MANAGER = "TECH_MANAGER",
	TECH_LEADER = "TECH_LEADER",
	FULL_STACK_DEV = "FULL_STACK_DEV",
	FRONT_END_DEV = "FRONT_END_DEV",
	BACK_END_DEV = "BACK_END_DEV",
	GAME_DEV = "GAME_DEV",
	QUALITY_ASSURANCE = "QUALITY_ASSURANCE",

	ANIMATOR = "ANIMATOR",
	DESIGNER = "DESIGNER",
	ILLUSTRATOR = "ILLUSTRATOR",
	GAME_DESIGNER = "GAME_DESIGNER",
	DIGITAL_SCULPTOR = "DIGITAL_SCULPTOR",

	ROBOTIC_ENGINEER = "ROBOTIC_ENGINEER",

	CEO = "CEO",
	RECRUITER = "RECRUITER",
	SOCIAL_MEDIA = "SOCIAL_MEDIA",
}

export const isDeveloperHeadline = (headline?: HeadlineEnum) => {
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
}

export const isDesignerHeadline = (headline?: HeadlineEnum) => {
	switch (headline) {
		case HeadlineEnum.ANIMATOR:
		case HeadlineEnum.DESIGNER:
		case HeadlineEnum.GAME_DESIGNER:
		case HeadlineEnum.ILLUSTRATOR:
		case HeadlineEnum.DIGITAL_SCULPTOR:
			return true;
		default:
			return false;
	}
}

export const isRoboticsHeadline = (headline?: HeadlineEnum) => {
	switch (headline) {
		case HeadlineEnum.ROBOTIC_ENGINEER:
			return true;
		default:
			return false;
	}
}

export const isEntrepreneurHeadline = (headline?: HeadlineEnum) => {
	switch (headline) {
		case HeadlineEnum.CEO:
		case HeadlineEnum.RECRUITER:
		case HeadlineEnum.SOCIAL_MEDIA:
			return true;
		default:
			return false;
	}
}

export const HeadlineValues = () => getValues(HeadlineEnum);
