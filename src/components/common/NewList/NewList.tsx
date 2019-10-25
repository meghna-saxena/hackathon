import { List, Avatar, Skeleton } from "antd";
import * as React from "react";
import "./NewList.css";

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

export default class NewList extends React.Component {
  handleApproveRequest = (item: any) => {
    console.log("handleApproveRequest", item);
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
                  onClick={item => this.handleApproveRequest(item)}
                >
                  Approve
                </a>,
                <a key="list-loadmore-more">Reject</a>
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
