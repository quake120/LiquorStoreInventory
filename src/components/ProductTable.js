import React, { Component } from "react";
import { Table, Button, Input, Menu } from "antd";
import { productMap, statusMap } from "../ProductCatMap";

export class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          key: "1",
          product_descrip: "03 ORANGE LIQOUR",
          status: "S",
          category: "YSC",
          size: "750ml",
          price: "22.23"
        },
        {
          key: "2",
          product_descrip: "1+1=3 CAVA BRUT NV",
          status: "L",
          category: "IHP",
          size: "750ml",
          price: 15.15
        },
        {
          key: "3",
          product_descrip: "14 HANDS BRUT",
          status: "I",
          category: "IHP",
          size: "750ml",
          price: 15.99
        }
      ],
      columns: [
        {
          title: "Product Name",
          dataIndex: "product_descrip",
          width: 200,
          key: "product_descrip"
        },
        {
          title: "Status",
          dataIndex: "status",
          width: 50,
          key: "status",
          render: (statusCode) => <>{statusMap[statusCode]}</>
        },
        {
          title: "Category",
          dataIndex: "category",
          width: 30,
          key: "category",
          render: (categoryCode) => <>{productMap[categoryCode]}</>
        },
        {
          title: "Size",
          dataIndex: "size",
          key: "size",
          width: 50
        },
        {
          title: "Price",
          dataIndex: "price",
          key: "price",
          width: 25,
          render: (price) => <>{`$` + price}</>
        }
      ],
      filteredData: null
    };
  }

  filter = (event) => {
    let searchTerm = event.target.value;

    let filteredData = this.state.data.filter((d) =>
      Object.keys(d).some((k) =>
        String(d[k]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    this.setState({ filteredData });
  };

  render() {
    return (
      <div>
        <Input
          size="large"
          onKeyUp={this.filter}
          placeholder="Search For Utah DABC Product"
          style={{ width: "50%" }}
        ></Input>
        <Table
          dataSource={
            this.state.filteredData == null
              ? this.state.data
              : this.state.filteredData
          }
          columns={this.state.columns}
        />
      </div>
    );
  }
}
