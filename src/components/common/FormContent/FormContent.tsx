import * as React from "react";
import DatePicker from "../DatePicker/DatePicker";
import { Button, Menu, Dropdown, notification } from "antd";
import { Input, Tooltip, Icon } from "antd";
import "./FormContent.css";

import axios from "axios";

const MEGGIE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzQXQiOjE1NzIwMjUyNTYsImFjY2Vzc190b2tlbiI6InlhMjkuSWwtcEI4MHNkS2EyeFlPMi1ZekJ1UXNjclIyNE5yY0xyV1NOWEI1OVFpMDM4QjFpTnJ5TlZjNEZrZTRUajZfc25XSENhTXJtay1sb3FJRGpMazQ3N1ZPb0lobmVHTW4tT05YMi1WRmNveDBxT2hPZ05ORi1wd3hnZERnT2hXODg1QSIsInJlZnJlc2hfdG9rZW4iOiIxLy8wOXY0MThEdWw4WUtyQ2dZSUFSQUFHQWtTTndGLUw5SXJ3WmgyUXU4WFBDT2U3X0ZrRWVaQWRBbl9yaHNoc1hEV3p5eTB4M2x1SzdxWXRfNVZrTkgxR2JScEVkWWx3QVVfcFhBIiwidXNlcm5hbWUiOiJtZWdobmEuc3JpdmFzdGF2YUBhdXRvMS5jb20iLCJyb2xlcyI6W119.1S1NcFzIOggGY4QKGFNj4sAuGaJ97qeNV8_MaYyWHt4";

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
