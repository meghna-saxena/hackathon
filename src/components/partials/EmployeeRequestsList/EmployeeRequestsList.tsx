import { List, Avatar, Skeleton, Spin, Icon, notification } from "antd";
import * as React from "react";
import axios from "axios";
import moment from "moment";

import "./EmployeeRequestsList.css";

const data = [
  {
    title: "Meghna Srivastava"
  },
  {
    title: "John Doe"
  },
  {
    title: "Emma Watson"
  }
];

const MEGGIE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzQXQiOjE1NzIyNjM5OTQsImFjY2Vzc190b2tlbiI6InlhMjkuSWwtcEI1UGRmR19HT096VUIyeXNJX19SRWZTQ29Qanc3a1pkbnZRWnFydENjSF85V1Z5NTk3T0Rhd0I1aWJTdkpQcXMxTDFuQnJZRzNYOThYTVZlZi1meFllSXNxQ1hJMXRneW5BSTZyZWd3TVo0bTk2ZTdkdUFKOUxOdnhzT01YUSIsInJlZnJlc2hfdG9rZW4iOiIxLy8wOXUtLUc1RDg3d0gwQ2dZSUFSQUFHQWtTTndGLUw5SXJSMTlDS3dfVU9velhaVnBoUEEtdlBfQkxadFNGOHJCOVgyc1huUTMxQ0dxOTRvQnV5NHJ4RnN6cmxOZTBOVmxpU21jIiwidXNlcm5hbWUiOiJtZWdobmEuc3JpdmFzdGF2YUBhdXRvMS10ZXN0LmNvbSIsInJvbGVzIjpbXX0.AFwTuNmWnggj_2PraLPGdwI6HCfouGiO2i0xuMmk0ao";

export default class EmployeeRequestsList extends React.Component<any, any> {
  state = {
    approved: null,
    declined: null,
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
        "https://api-gate.qa.eagle.auto1.team/v1/people-directory/profile/me/holiday/my-employees",
        options
      )
      .then(res => {
        console.log("res employee", res);
        this.setState({ realData: res.data, isLoading: false });
      })
      .catch(err => {
        this.setState({ error: err, isLoading: false });
      });
  }

  handleApproveRequest = (item: any) => {
    // item.employeeid

    //POST
    // https://api-gate.qa.eagle.auto1.team/v1/people-directory/profile/me/holiday/my-employees/${employeeId}/decission
    console.log("handleApproveRequest", item);

    console.log("FILTERRRRRR", data.splice(item, 1));
    this.setState({ approved: "Approved" });
  };

  handleDeclineRequest = (item: any) => {
    console.log("handleDeclineRequest", item);
    this.setState({ approved: null, declined: "Declined" });
  };

  openNotificationWithIcon = type => {
    notification[type]({
      message: "Success",
      description: "You have just approved the vacation!"
    });
  };

  render() {
    if (this.state.isLoading && !this.state.error) {
      return <Spin style={{ margin: "auto" }} />;
    }

    if (this.state.approved) {
      this.openNotificationWithIcon("success");
    }

    return (
      <div
        style={{
          float: "right",
          width: "75%",
          marginRight: "40px"
        }}
      >
        <h3 className="pendingRequestHeading">Employee vacation requests</h3>
        {this.state.realData ? (
          <List
            itemLayout="horizontal"
            dataSource={data} //data
            renderItem={(item: any) => (
              <List.Item
                actions={[
                  <a
                    key="list-loadmore-edit"
                    onClick={() => this.handleApproveRequest(item)}
                  >
                    {/* {this.state.approved || "Approve"} */}
                    <Icon
                      style={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                        background: "#0e6b07",
                        padding: "4px",
                        borderRadius: "20px"
                      }}
                      type="check"
                    />
                  </a>,
                  <a
                    key="list-loadmore-more"
                    onClick={() => this.handleDeclineRequest(item)}
                  >
                    {/* Decline */}
                    <Icon
                      style={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                        background: "#db4f42",
                        padding: "4px",
                        borderRadius: "20px"
                      }}
                      type="close"
                    />
                  </a>
                ]}
              >
                <List.Item.Meta
                  style={{
                    textAlign: "left",
                    paddingLeft: "60px"
                  }}
                  avatar={
                    <Avatar src="https://pngriver.com/wp-content/uploads/2018/04/Download-Donald-Duck-PNG-Clipart.png" />
                  }
                  title={item.title} //item.title
                  description={"Leave taken from 25/10/2019 to 30/10/2019"} //"Leave taken from 25/10/2019 to 30/10/2019"
                />
              </List.Item>
            )}
          />
        ) : null}
        ,
      </div>
    );
  }
}
