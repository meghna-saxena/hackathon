import * as React from "react";
import { Layout } from "antd";
import HeaderComponent from "../Header/Header";
import FormContent from "../FormContent/FormContent";
const { Header, Footer, Sider, Content } = Layout;

export default class LayoutComponent extends React.Component<{}, {}> {
  public render() {
    return (
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>
            <HeaderComponent />
          </Header>
          <Content>
            <FormContent />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
