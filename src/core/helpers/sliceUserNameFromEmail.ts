export const sliceUserNameFromEmail = (email: string) => email.split('@').slice(0,1).join()