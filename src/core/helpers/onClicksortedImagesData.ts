export const onClicksortedImagesData = (imagesData: any, userName: string) => {
  let index = userName.length;
    let sortedImagesData: any = {};
    Object.keys(imagesData).forEach((user: string) => {
      if (user.substr(0, index) === userName) {
        sortedImagesData[user] = imagesData[user];
      }
    });
    return sortedImagesData;
};