export const isEmpty = (obj: {} | null) => {
  for(let key in obj){
    return false;
  }
  return true;
}

// export const isEmpty:any = (obj: any) => Object.keys?(obj).length === 0: