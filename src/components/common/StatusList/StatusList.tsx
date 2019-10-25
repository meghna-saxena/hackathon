import { List, Avatar, Skeleton, Badge } from "antd";
import * as React from "react";
import "./StatusList.css";

const data = [
  {
    title: "Meghna Srivastava"
  },
  
];

export default class NewList extends React.Component {
  render() {
    return (
      <div
        style={{
          float: "right",
          width: "75%",
          marginRight: "40px"
        }}
      >
        <h3 className="statusHeading">Status of your vacation requests</h3>
        <List
          itemLayout="horizontal"
          dataSource={data}
          //   renderItem={item => (
          //     <List.Item>
          //       <List.Item.Meta
          //         avatar={
          //           <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          //         }
          //         title={item.title}
          //         description="Leave taken from 25/10/2019 to 30/10/2019"
          //       />
          //     </List.Item>
          //   )}

          renderItem={item => (
            <List.Item
              actions={[
                <span
                  style={{
                    background: "green",
                    color: "#fff",
                    padding: "5px",
                    borderRadius: "20px"
                  }}
                >
                  Approved
                </span>,
                <a key="list-loadmore-delete">Delete</a>
              ]}
            >
              {/* <Skeleton avatar title={false} active> */}
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
              {/* <div>content</div> */}
              {/* </Skeleton> */}
            </List.Item>
          )}
        />
        ,
      </div>
    );
  }
}
