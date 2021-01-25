export const getValues = (ENUM: any) =>
	[...new Set(Object.values(ENUM))] as Array<string>;
