import { List, Avatar, Skeleton } from "antd";
import * as React from "react";

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
  //   {
  //     title: "Ant Design Title 4"
  //   }
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
                <a key="list-loadmore-edit">Approve</a>,
                <a key="list-loadmore-more">Reject</a>
              ]}
            >
              {/* <Skeleton avatar title={false} active> */}
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={item.title}
                description="Leave taken from 25/10/2019 to 30/10/2019"
              />
              <div>content</div>
              {/* </Skeleton> */}
            </List.Item>
          )}
        />
        ,
      </div>
    );
  }
}
