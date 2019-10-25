import * as React from "react";
import DatePicker from "../DatePicker/DatePicker";
import { Button, Menu, Dropdown, notification } from "antd";
// import { Input, Tooltip, Icon } from "antd";
import "./FormContent.css";

import axios from "axios";

const MEGGIE_TOKEN =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzQXQiOjE1NzIwNDI4MjcsImFjY2Vzc190b2tlbiI6InlhMjkuSWwtcEIzejBjSFNocDA3S2lxV1ZzNVJYZmowbUxCNnBNMEwyLWNuVDZNWlZGQl8xRTJWS2JUdDhLVk12WGtxWmtMRWhUdUkxQXJTZzJiNmVBVVhFanhPVHQ0aHhfUTVJc1hDUkJWc1k0d0JTNFlLQkRPdTNKTzVKeG5ZXzdDVXZpZyIsInJlZnJlc2hfdG9rZW4iOiIxLy8wOVRFaDlPdUpOWVoxQ2dZSUFSQUFHQWtTTndGLUw5SXI4X2xpZC00X19tZjUzOEJyZFMycWtXOWwyanFpbml5OS1IdnlSMFNhWlNyY1RkMlJUb3Jkek92VS1EZ3Y1VGVvTW9NIiwidXNlcm5hbWUiOiJtZWdobmEuc3JpdmFzdGF2YUBhdXRvMS5jb20iLCJyb2xlcyI6W119.-V4vabqpNvmxJ_IWgJmqngMPKQDNbd2lxmSMSZC8kQY";

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
        this.setState({ reqStatus: res.status, dateFrom: null, dateTo: null });
      });
  };

  render() {
    if (this.state.reqStatus) {
      this.openNotificationWithIcon("success");
    }

    return (
      <div className="content">
        <div
          style={{
            width: "50%",
            margin: "auto"
          }}
        >
          <h1>Vacation Request</h1>
          <img
            src="https://icons-for-free.com/iconfiles/png/512/relax+resolutions+rest+sleep+umbrella+vacation+icon-1320084099174923753.png"
            width="100px"
          />
          <br />
          <p style={{ fontSize: "16px", textAlign: "justify" }}>
            <span style={{ background: "beige" }}>Meghna Srivastava</span>{" "}
            please fill the holiday request form at the latest 4 weeks before
            the start of your holidays. We cannot accept holiday requests which
            we receive after this period.
          </p>
          <br />
          <br />
          <br />
          <DatePicker
            style={{ width: "500px !important" }}
            handleValue={this.handleDateOfVacation}
          />
          {/* {/* <br /> */}
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
      </div>
    );
  }
}

export default FormContent;
