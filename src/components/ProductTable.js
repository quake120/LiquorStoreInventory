import React, { Component } from "react";
import { Table, Button, Input, Menu } from "antd";
import { productMap, statusMap } from "../ProductCatMap";
import { testData } from "../testData";

export class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: testData,
      columns: [
        {
          title: "Product Name",
          dataIndex: "product_descrip",
          width: 200,
          key: "product_descrip",
          render: (productName) => (
            <>{productName.replace(/(\d{1,5}ml)|(\d{1,5}\sml)/, "")}</>
          )
        },
        {
          title: "Status",
          dataIndex: "status",
          width: 125,
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
          width: 20
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

  filterMap = (tableData) => {
    if (productMap[tableData] !== undefined) {
      return productMap[tableData];
    } else if (statusMap[tableData] !== undefined) {
      return statusMap[tableData];
    } else {
      return tableData;
    }
  };

  filter = (event) => {
    let searchTerm = event.target.value;

    let filteredData = this.state.data.filter((d) =>
      Object.keys(d).some((k) =>
        //String(d[k]).toLowerCase().includes(searchTerm.toLowerCase())
        String(this.filterMap(d[k]))
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
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
          placeholder="Search For Utah Liquor Store Products"
          style={{ width: "50%", marginBottom: 20 }}
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
