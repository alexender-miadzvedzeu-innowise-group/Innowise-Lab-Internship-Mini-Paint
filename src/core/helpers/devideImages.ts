export const devideImages = (data: any): object => {
  let sortedData: any = {};
      data.forEach((img:any) => {
        const userName = Object.keys(img)[0];
        sortedData[userName] = img[userName];
      });
  return sortedData;
};