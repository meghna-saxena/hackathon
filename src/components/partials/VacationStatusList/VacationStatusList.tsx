import { List, Avatar, Skeleton, Badge, Spin, Divider } from "antd";
import * as React from "react";
import axios from "axios";
import moment from "moment";

import Piechart from "../../common/PieChart/PieChart.jsx";
import "./VacationStatusList.css";

const STATUS_CODES = {
  0: "Declined",
  1: "Approved",
  2: "Pending"
};

const MEGGIE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzQXQiOjE1NzIyMDE0MDgsImFjY2Vzc190b2tlbiI6InlhMjkuSWwtcEI2YVVLU05TX0VzZGZOX0dySXBrak1scWlRTDhWY1FwUVo4eDd6UEJ2TFR1QkliYkJzSkJWRUg5SHcycnFhbEc1VlQ0dWxIR2l3Qk1kSTltS0pKV0NRVHQ3Nmh1aUZtSEpTUjNDQktaWnhNY3l6TTR2UW1pNFZkcVRQNnpNQSIsInJlZnJlc2hfdG9rZW4iOiIxLy8wYzdjQVFILW1mSlI2Q2dZSUFSQUFHQXdTTndGLUw5SXJsUmZVNGppNnJyRDV5SmpsMmZfc0pDUkktOHVBTDBnV3MxQk10MzRsSk9BclZSeW9HMkpUMDJsVHFUeHFfLWlzcWVVIiwidXNlcm5hbWUiOiJtZWdobmEuc3JpdmFzdGF2YUBhdXRvMS5jb20iLCJyb2xlcyI6W119.dxhwg4dY63TvRtnzfZI_et_UY0V4V-Mhxn92pt7grYw";

export default class VacationStatusList extends React.Component<any, any> {
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

  makeDecision = item => {
    console.log("makeDecision", item);
  };

  getColor = status => {
    const colorBadge = {
      Pending: "#e6ae17",
      Approved: "#acf299",
      Declined: "#acf299"
    };

    return colorBadge[status];
  };

  render() {
    if (this.state.isLoading && !this.state.error) {
      return <Spin style={{ margin: "auto" }} />;
    }

    return (
      <div
        style={{
          float: "right",
          width: "75%",
          marginRight: "40px"
        }}
      >
        <h3 className="statusHeading">Status of your vacations</h3>

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
                      background: this.getColor(STATUS_CODES[item.status]),
                      color: "#30302e",
                      padding: "5px 15px",
                      borderRadius: "20px"
                    }}
                  >
                    {STATUS_CODES[item.status]}
                  </span>,
                  <a
                    key="list-loadmore-delete"
                    onClick={() => this.makeDecision(item.employeeName)}
                  >
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
                  title={`${item.firstName} ${item.lastName}`}
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
