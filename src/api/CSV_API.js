const xlsx = require("xlsx");
const AWS = require("aws-sdk");
const fs = require("fs");

export const parseBookToJSON = async () => {
  var workbook = xlsx.readFile("Pricelist.xls");
  var sheet_name_list = await workbook.SheetNames;

  var processedData = xlsx.utils.sheet_to_json(
    workbook.Sheets[sheet_name_list[0]]
  );

  return processedData;
};
