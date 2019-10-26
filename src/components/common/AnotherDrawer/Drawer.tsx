import { Menu, Icon, Badge } from "antd";
import * as React from "react";
import { withRouter } from "react-router-dom";

const { SubMenu } = Menu;

class Sider extends React.Component<any, any> {
  handleClick = e => {
    console.log("click ", e);
  };

  renderList = () => {
    this.props.history.push("/pending-request");
  };

  renderRequestPage = () => {
    this.props.history.push("/request-holiday");
  };

  renderHolidayTrackerPage = () => {
    this.props.history.push("/holiday-tracker");
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu
          style={{
            height: "180px"
          }}
          key="sub1"
          title={
            <span>
              <Icon type="appstore" />
              <span>My Vacations</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1">
            <Menu.Item key="1" onClick={this.renderRequestPage}>
              Vacation Request
            </Menu.Item>
            <Menu.Item key="2" onClick={this.renderHolidayTrackerPage}>
              Vacation Overview
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>My Employees</span>
            </span>
          }
        >
          <Menu.Item key="3" onClick={this.renderList}>
            Pending Requests
            <Badge style={{ marginLeft: "10px" }} count={3}></Badge>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default withRouter(Sider);
