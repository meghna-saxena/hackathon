import { List, Avatar, Skeleton, Badge, Spin, Divider } from "antd";
import * as React from "react";
import axios from "axios";
import "./StatusList.css";
import moment from "moment";
import Piechart from "../../PieChart/PieChart.jsx";
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
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzQXQiOjE1NzIwNDI4MjcsImFjY2Vzc190b2tlbiI6InlhMjkuSWwtcEIzejBjSFNocDA3S2lxV1ZzNVJYZmowbUxCNnBNMEwyLWNuVDZNWlZGQl8xRTJWS2JUdDhLVk12WGtxWmtMRWhUdUkxQXJTZzJiNmVBVVhFanhPVHQ0aHhfUTVJc1hDUkJWc1k0d0JTNFlLQkRPdTNKTzVKeG5ZXzdDVXZpZyIsInJlZnJlc2hfdG9rZW4iOiIxLy8wOVRFaDlPdUpOWVoxQ2dZSUFSQUFHQWtTTndGLUw5SXI4X2xpZC00X19tZjUzOEJyZFMycWtXOWwyanFpbml5OS1IdnlSMFNhWlNyY1RkMlJUb3Jkek92VS1EZ3Y1VGVvTW9NIiwidXNlcm5hbWUiOiJtZWdobmEuc3JpdmFzdGF2YUBhdXRvMS5jb20iLCJyb2xlcyI6W119.-V4vabqpNvmxJ_IWgJmqngMPKQDNbd2lxmSMSZC8kQY";

export default class NewList extends React.Component<any, any> {
  state = {
    realData: [],
    isLoading: true,
    error: null
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
        this.setState({ realData: res.data, isLoading: false });
      })
      .catch(err => {
        this.setState({ error: err, isLoading: false });
      });
  }

  makeDecision = () => {
    console.log("makeDecision");
  };

  getColor = status => {
    const colorBadge = {
      pending: "#4a4948",
      approved: "green",
      declined: "red"
    };

    return colorBadge[status];
  };

  render() {
    if (this.state.isLoading && !this.state.error) {
      return <Spin />;
    }

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
            style={{ width: "50%", float: "right" }}
            itemLayout="horizontal"
            dataSource={this.state.realData}
            renderItem={(item: any) => (
              <List.Item
                actions={[
                  <span
                    style={{
                      background:
                        "green" || this.getColor(statusEnum[item.status]),
                      color: "#edd38a",
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
        <Divider style={{ height: "90vh" }} type="vertical" />
        <div style={{ float: "left" }}>
          <Piechart />
        </div>
      </div>
    );
  }
}
