import React, { Component } from "react";
import { Table, Button, Input, Menu } from "antd";
import { columns } from "./columns";
import { productMap, statusMap } from "../ProductCatMap";
import { getAllInventory } from "../api/Firebase";

export class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      columns: columns,
      filteredData: null,
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    var data = await getAllInventory();
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

  // handleChange(event) {
  //   this.setState({ searchTerm: event.target.value });
  // }

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
        <h1>Hello Bret</h1>
        <Input
          size="large"
          onKeyUp={this.filter}
          value={this.state.searchTerm}
          placeholder="Search For Utah Liquor Store Products"
          style={{ width: "50%", marginBottom: 20 }}
        ></Input>
        <Button size="large" onClick={this.filter}>
          Search
        </Button>
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
