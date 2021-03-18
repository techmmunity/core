export const getValues = <T>(ENUM: any) =>
	[...new Set(Object.values(ENUM))] as Array<T>;
