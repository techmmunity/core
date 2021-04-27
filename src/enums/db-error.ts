import { getValues } from "./helpers/get-values";

export enum DbErrorEnum {
	UniqueViolation = "23505",
	ForeignKeyViolation = "23503",
}

export const DbErrorValues = () => getValues<DbErrorEnum>(DbErrorEnum);
