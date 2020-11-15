import React, { Component } from "react";
import { Table, Button, Input, Menu } from "antd";
import { columns } from "./columns";

import { getAllInventory } from "../api/Firebase";

export class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      columns: columns,
      filteredData: null,
    };
  }

  async componentDidMount() {
    var data = await getAllInventory();
    console.log(data);
    this.setState({ data: data.data });
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
