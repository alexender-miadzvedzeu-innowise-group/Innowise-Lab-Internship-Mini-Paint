export const isEmpty = (obj: {} | null) => {
  for(let key in obj){
    return false;
  }
  return true;
}