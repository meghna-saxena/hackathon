import * as React from "react";
import Header from "./common/Header/Header";
import Button from "antd/es/button";
import FormContent from "../components/common/FormContent/FormContent";
import Layout from "./common/Layout/Layout";
import SideDrawer from "./common/SideDrawer/SideDrawer";

export interface IAppProps {}

export default class HolidayRequestForm extends React.Component<IAppProps> {
  public render() {
    return <FormContent />;
  }
}
