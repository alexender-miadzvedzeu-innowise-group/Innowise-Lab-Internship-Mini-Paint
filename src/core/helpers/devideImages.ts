import { Type } from 'typescript';

export const devideImages = (data: Array<object> | []): object => {
  let sortedData: {[key: string]: Type} = {};
      data.forEach((img:any) => {
        const userName = Object.keys(img)[0];
        sortedData[userName] = img[userName];
      });
  return sortedData;
};