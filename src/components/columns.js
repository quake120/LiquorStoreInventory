import React from 'react';
import { productMap, statusMap } from "../ProductCatMap";


export const columns = [
    {
      title: "Product Name",
      dataIndex: "Description",
      width: 200,
      key: "descrip",
      render: (productName) => (
        <>{productName.replace(/(\d{1,5}ml)|(\d{1,5}\sml)/, "")}</>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      width: 125,
      key: "status",
      render: (statusCode) => <>{statusMap[statusCode]}</>,
    },
    {
      title: "Category",
      dataIndex: "csc",
      width: 30,
      key: "category",
      render: (categoryCode) => <>{productMap[categoryCode]}</>,
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      width: 20,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 25,
      render: (price) => <>{price}</>,
    },
  ]