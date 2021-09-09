export const devideImages = (data: any): object => {
  let sortedData: any = {};
      data.forEach((img:any) => {
        const userName = Object.keys(img)[0];
        sortedData[userName] = img[userName];
        // if (sortedData[img.userName]) {
          // sortedData[img.userName].push(img.imgUrl);
        // } else {
          // sortedData[img.userName] = [];
          // sortedData[img.userName].push(img.imgUrl);
        // }
      });
  return sortedData;
};