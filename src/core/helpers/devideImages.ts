export const devideImages = (data: any): object => {
  let sortedData: any = {};
      data.forEach((img:any) => {
        if (sortedData[img.userName]) {
          sortedData[img.userName].push(img.imgUrl);
        } else {
          sortedData[img.userName] = [];
          sortedData[img.userName].push(img.imgUrl);
        }
      })
  return sortedData;
}