const axios = require("axios");

export const getAllInventory = async () => {
  let returnedData = await axios.get("http://127.0.0.1:3001/inventory");
  console.log(returnedData);
  return returnedData;
};
