import * as React from "react";
import { Menu, Icon } from "antd";
import List from "../List/List";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

const { SubMenu } = Menu;

class Sider extends React.Component<any, any> {
  state = {
    list: false
  };

  handleClick = e => {
    console.log("click ", e);
  };

  renderList = () => {
    // this.setState({ list: true });
    //<Redirect to="/holiday-balance" />;
    this.props.history.push("/holiday-balance");
  };

  render() {
    // let testList: any = null;

    // if (this.state.list) {
    //   // testList = <List />;
    //   <Redirect to='/holiday-balance' />
    // }

    return (
      <Menu
        onClick={this.handleClick}
        style={{ height: "100vh", width: "20%" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="appstore" />
              <span>Know your TimeOut</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1">
            <Menu.Item key="1">Holiday Request</Menu.Item>
            <Menu.Item key="2" onClick={this.renderList}>
              Holiday Balance
            </Menu.Item>
          </Menu.ItemGroup>
          {/* <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup> */}
        </SubMenu>
        {/* <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu> */}
        {/* <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu> */}
        {/* {testList} */}
      </Menu>
    );
  }
}

export default withRouter(Sider);
