import * as React from "react";
import Header from "./common/Header/Header";
import Button from "antd/es/button";
import FormContent from "./common/FormContent/FormContent";
import Layout from "./common/Layout/Layout";
import SideDrawer from "./common/SideDrawer/SideDrawer";
import StatusList from "./common/StatusList/StatusList";

export interface IAppProps {}

export default class HolidayTrackerPage extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <Header />
        <StatusList />
        <SideDrawer />
      </div>
    );
  }
}
