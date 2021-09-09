import { Type } from 'typescript';

interface IimagesData  {
  [key: string]: Object
};

export const onClicksortedImagesData = (imagesData: IimagesData, userName: string) => {
  let index = userName.length;
    let sortedImagesData: {[key: string]: Object} = {};
    Object.keys(imagesData).forEach((user: string) => {
      if (user.substr(0, index) === userName) {
        sortedImagesData[user] = imagesData[user];
      }
    });
    return sortedImagesData;
};