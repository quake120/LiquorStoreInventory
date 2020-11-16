const axios = require("axios");

export const getAllInventory = async () => {
  let returnedData = await axios.get("http://71.199.15.88:3001/inventory");  
  return returnedData;
};
