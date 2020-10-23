import React from "react";
import { ProductTable } from "./components/ProductTable";
import { Layout } from "antd";
import { Menu } from "antd";

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <b>Utah</b> Liquor Store Search
        </Menu.Item>
      </Menu>
      <Content style={{ padding: "24px" }}>
        <ProductTable />
      </Content>
      <Footer>
        This site is not run or authorized by, or affiliated with the Utah
        Department of Alcoholic Beverage Control (DABC).
      </Footer>
    </Layout>
  );
};

export default App;
