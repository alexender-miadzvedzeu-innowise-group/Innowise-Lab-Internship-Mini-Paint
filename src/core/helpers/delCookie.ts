import { setCookie } from "./setCookie";

export const delCookie = (cname: string) => {
  return setCookie(cname, '', -1000)
}