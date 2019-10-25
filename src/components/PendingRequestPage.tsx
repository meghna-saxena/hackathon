import * as React from "react";
import Header from "./common/Header/Header";
import Button from "antd/es/button";
import FormContent from "./common/FormContent/FormContent";
import Layout from "./common/Layout/Layout";
import SideDrawer from "./common/SideDrawer/SideDrawer";
import List from "./common/List/List";
import NewList from './common/NewList/NewList';

export interface IAppProps {}

export default class PendingRequestPage extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <Header />
        <NewList />
        <SideDrawer />
      </div>
    );
  }
}
