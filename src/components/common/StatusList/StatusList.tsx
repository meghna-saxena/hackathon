import { List, Avatar, Skeleton, Badge } from "antd";
import * as React from "react";
import axios from "axios";
import "./StatusList.css";
import moment from "moment";

// const data = [
//   {
//     employeeName: "Meghna Srivastava",
//     dateFrom: "2019-11-19",
//     dateTo: "2019-11-21"
//   }
// ];

const statusEnum = {
  0: "Declined",
  1: "Approved",
  2: "Pending"
};

const MEGGIE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzQXQiOjE1NzIwMTkwNDksImFjY2Vzc190b2tlbiI6InlhMjkuSWwtcEJ6ZkIyUUlnZ3VsZzdLbnd4NGE4dzZOVloyaXM1dmVPa1pIak5CWUlHMFVZVXpuNldZM3MzX1l2dmpsOEpyRjhsX093ZVRsMC1KMHZkRnlYcXp0cldDbEFlWnNWU0l3dVByWUN1WlFSSXloZnlpS1F2bnA4SENFRENLajRhQSIsInJlZnJlc2hfdG9rZW4iOiIxLy8wOTZFaVFtNG1wYjRDQ2dZSUFSQUFHQWtTTndGLUw5SXJQdGdreGU0VGNEenN0Sk5STmV3WEt1X3VNemhEc0VpZ29fNHJHa0NtdnVzbUFSYjFsbDVNWndaWFM0UGZZNG5ncjRzIiwidXNlcm5hbWUiOiJtZWdobmEuc3JpdmFzdGF2YUBhdXRvMS5jb20iLCJyb2xlcyI6W119.6EbmKhNm-zyrT88oRibzRV67uqXebAd3RAp5aMOEOiY";

export default class NewList extends React.Component<any, any> {
  state = {
    realData: []
  };

  async componentDidMount() {
    const defaultHeaders = {
      "Content-Type": "application/json",
      "X-Intranet": true
    };

    const options = {
      headers: {
        ...defaultHeaders,
        Authorization: `Bearer ${MEGGIE_TOKEN}`
      }
    };

    const response = await axios
      .get(
        "https://api-gate.qa.eagle.auto1.team/v1/people-directory/profile/me/holiday/overview",
        options
      )
      .then(res => {
        this.setState({ realData: res.data });
      });
  }

  makeDecision = () => {
    console.log("makeDecision");
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
        <h3 className="statusHeading">Status of your vacation requests</h3>
        {this.state.realData ? (
          <List
            itemLayout="horizontal"
            dataSource={this.state.realData}
            renderItem={(item: any) => (
              <List.Item
                actions={[
                  <span
                    style={{
                      background: "#edd38a",
                      color: "#4a4948",
                      padding: "5px 15px",
                      borderRadius: "20px"
                    }}
                  >
                    {statusEnum[item.status]}
                  </span>,
                  <a key="list-loadmore-delete" onClick={this.makeDecision}>
                    Delete
                  </a>
                ]}
              >
                {/* <Skeleton avatar title={false} active> */}
                <List.Item.Meta
                  style={{
                    textAlign: "left",
                    paddingLeft: "60px"
                  }}
                  avatar={
                    <Avatar src="https://pngriver.com/wp-content/uploads/2018/04/Download-Donald-Duck-PNG-Clipart.png" />
                  }
                  title={item.employeeName}
                  description={`Leave taken from ${moment(item.dateFrom).format(
                    "DD-MM-YYYY"
                  )} to ${moment(item.dateTo).format("DD-MM-YYYY")}`}
                />
                {/* <div>content</div> */}
                {/* </Skeleton> */}
              </List.Item>
            )}
          />
        ) : null}
      </div>
    );
  }
}
