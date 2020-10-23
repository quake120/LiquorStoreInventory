import React from "react";
import { ProductTable } from "./components/ProductTable";
import { Layout } from "antd";
import { Menu } from "antd";

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1"></Menu.Item>
      </Menu>
      <Content>
        <ProductTable />
      </Content>
      <Footer>
        Not associated with or run by the Utah Department of Alcoholic Beverage
        Control. All inventory belongs to DABC.
      </Footer>
    </Layout>
  );
};

export default App;
