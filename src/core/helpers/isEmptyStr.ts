export const isNotEmpty = (values: []) => {
  values.forEach((val: string) => val.length !== 0)
}