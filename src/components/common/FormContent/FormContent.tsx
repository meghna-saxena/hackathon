import * as React from "react";
import DatePicker from "../DatePicker/DatePicker";
import { Button, Menu, Dropdown, notification } from "antd";
import { Input, Tooltip, Icon } from "antd";
import "./FormContent.css";

import axios from "axios";

const MEGGIE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzQXQiOjE1NzIwMTc3NTEsImFjY2Vzc190b2tlbiI6InlhMjkuSWwtcEI3UkR6V0VyWG16QVZxbGpNTjlwM0dxNE0yM3pDdjAxWGItZUtRY041SnhreUd0YzBrVll5QlJBSXJMUEFWSlF2aXFwU3puemM4SEtoVkZuT1V6djBLV1A3bG1LeEI0RWlqalBtUExLT2hvY2FncmF4eENiZ1FPUW9KMFhrUSIsInJlZnJlc2hfdG9rZW4iOiIxLy8wOWN3SlptWVRETGRSQ2dZSUFSQUFHQWtTTndGLUw5SXJqQTJMQU1OTHliTE5FS01jZXNibmtkcmNLRElUdndnUks1LXZDNnVQQ0xCYldXTlFWRllYNm1VWGdFa2JCRVo2VEdvIiwidXNlcm5hbWUiOiJtZWdobmEuc3JpdmFzdGF2YUBhdXRvMS5jb20iLCJyb2xlcyI6W119.GdaQpvaEvOwIkhsydNkx9tOZRyscv7-3-aebkRGlEPs";

class FormContent extends React.Component<any, any> {
  state = {
    dateFrom: null,
    dateTo: null,
    reqStatus: null
  };

  openNotificationWithIcon = type => {
    notification[type]({
      message: "Success",
      description: "Your vacation request has been submitted."
    });
  };

  handleDateOfVacation = e => {
    this.setState({ dateFrom: e[0], dateTo: e[1] });
  };

  handleSubmitForm = async () => {
    const defaultHeaders = {
      "Content-Type": "application/json",
      "X-Intranet": true
    };

    const data = {
      dateFrom: this.state.dateFrom,
      dateTo: this.state.dateTo
    };

    const options = {
      headers: {
        ...defaultHeaders,
        Authorization: `Bearer ${MEGGIE_TOKEN}`
      }
    };

    const response = await axios
      .post(
        "https://api-gate.qa.eagle.auto1.team/v1/people-directory/profile/me/holiday",
        data,
        options
      )
      .then(res => {
        console.log("res", res);
        this.setState({ reqStatus: res.status, dateFrom: null, dateTo: null });
      });
  };

  render() {
    if (this.state.reqStatus) {
      this.openNotificationWithIcon("success");
    }

    return (
      <div className="content">
        <h1>Holiday Request</h1>
        <br />
        <p style={{ fontSize: "16px", textAlign: "left" }}>
          <span style={{ background: "beige" }}>Meghna Srivastava</span> please
          fill the holiday request form at the latest 4 weeks before the start
          of your holidays. We cannot accept holiday requests which we receive
          after this period
        </p>
        <br />
        <br />
        <br />
        <DatePicker handleValue={this.handleDateOfVacation} />
        <br />
        <br />

        <br />
        <Button
          className="action-btn"
          style={{ marginRight: "25px", marginTop: "100px" }}
          type="primary"
          onClick={this.handleSubmitForm}
        >
          Submit
        </Button>
        <Button className="action-btn-cancel">Cancel</Button>
      </div>
    );
  }
}

export default FormContent;
