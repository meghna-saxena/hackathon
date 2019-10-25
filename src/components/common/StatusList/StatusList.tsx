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
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzQXQiOjE1NzIwMjUyNTYsImFjY2Vzc190b2tlbiI6InlhMjkuSWwtcEI4MHNkS2EyeFlPMi1ZekJ1UXNjclIyNE5yY0xyV1NOWEI1OVFpMDM4QjFpTnJ5TlZjNEZrZTRUajZfc25XSENhTXJtay1sb3FJRGpMazQ3N1ZPb0lobmVHTW4tT05YMi1WRmNveDBxT2hPZ05ORi1wd3hnZERnT2hXODg1QSIsInJlZnJlc2hfdG9rZW4iOiIxLy8wOXY0MThEdWw4WUtyQ2dZSUFSQUFHQWtTTndGLUw5SXJ3WmgyUXU4WFBDT2U3X0ZrRWVaQWRBbl9yaHNoc1hEV3p5eTB4M2x1SzdxWXRfNVZrTkgxR2JScEVkWWx3QVVfcFhBIiwidXNlcm5hbWUiOiJtZWdobmEuc3JpdmFzdGF2YUBhdXRvMS5jb20iLCJyb2xlcyI6W119.1S1NcFzIOggGY4QKGFNj4sAuGaJ97qeNV8_MaYyWHt4";

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

  getColor = status => {
    const colorBadge = {
      pending: "#4a4948",
      approved: "green",
      declined: "red"
    };

    return colorBadge[status];
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
                      background: "green" || this.getColor(statusEnum[item.status]),
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
      </div>
    );
  }
}
