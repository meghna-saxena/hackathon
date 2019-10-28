import { List, Avatar, Skeleton } from "antd";
import * as React from "react";

import "./EmployeeRequestsList.css";

const data = [
  {
    title: "Meghna Srivastava"
  },
  {
    title: "John Doe"
  },
  {
    title: "Hellie Mann"
  }
];

export default class EmployeeRequestsList extends React.Component<any, any> {
  state = {
    approved: null,
    declined: null
  };

  handleApproveRequest = (item: any) => {
    // item.employeeid

    //POST
    // https://api-gate.qa.eagle.auto1.team/v1/people-directory/profile/me/holiday/my-employees/${employeeId}/decission
    console.log("handleApproveRequest", item);
    this.setState({ approved: "Approved" });
  };

  handleDeclineRequest = (item: any) => {
    console.log("handleDeclineRequest", item);
    this.setState({ approved: "Declined" });
  };

  render() {
    return (
      <div
        style={{
          float: "right",
          width: "75%",
          marginRight: "40px"
        }}
      >
        <h3 className="pendingRequestHeading">Pending requests</h3>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item
              actions={[
                <a
                  key="list-loadmore-edit"
                  onClick={() => this.handleApproveRequest(item)}
                >
                  Approve
                </a>,
                <a
                  key="list-loadmore-more"
                  onClick={() => this.handleDeclineRequest(item)}
                >
                  Decline
                </a>
              ]}
            >
              <List.Item.Meta
                style={{
                  textAlign: "left",
                  paddingLeft: "60px"
                }}
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={item.title}
                description="Leave taken from 25/10/2019 to 30/10/2019"
              />
            </List.Item>
          )}
        />
        ,
      </div>
    );
  }
}
