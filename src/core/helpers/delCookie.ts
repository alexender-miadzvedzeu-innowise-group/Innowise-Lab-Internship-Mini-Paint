import { setCookie } from './setCookie';

export const delCookie = (cname: string) => setCookie(cname, '', -1000);