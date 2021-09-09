export const isEmptyFields = (values: Array<string>):boolean => Boolean(values.forEach((val: string) => val.length !== 0));