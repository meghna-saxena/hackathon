import * as React from "react";
import { Button, Menu, Dropdown, notification } from "antd";

import { DatePicker } from "../../common";
import "./VacationFormContent.css";

import axios from "axios";

const MEGGIE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzQXQiOjE1NzIyNzU3MzMsImFjY2Vzc190b2tlbiI6InlhMjkuSWwtcEJfUGd5eW9QVWxQaUpkc3RGYk1uZFk3bmJSaDNCRHk1YmRnMmlRMnotcjEtdWhMNW9yaDhCLTVQT0hZdjJPSVp1YjU0blQyQUc2cnZReGtXZUlDNmlPU1JKUnE3bEtIajU3eVAzQXNKQkdmaDd5c2FpWGI2STI2YXcyTTNRUSIsInJlZnJlc2hfdG9rZW4iOiIxLy8wOURab3l0MVg3bTVmQ2dZSUFSQUFHQWtTTndGLUw5SXJMZF81SmZPOGx0WDVjb05LLUZ3RGZrT1g5OVR1NU5Md21LcTh0bmdGSVNYU0JiMExjdDk3ZkdEdUtsbjJHbWlFT3JrIiwidXNlcm5hbWUiOiJtZWdobmEuc3JpdmFzdGF2YUBhdXRvMS5jb20iLCJyb2xlcyI6W119.QnTbS57YgfY4AHraVaITOD09GKsLvilztQQsjTyi41k";

class VacationFormContent extends React.Component<any, any> {
  state = {
    dateFrom: null,
    dateTo: null,
    reqStatus: null,
    error: null
  };

  openNotificationWithIcon = type => {
    notification[type]({
      message: "Success",
      description: "Your vacation request has been submitted."
    });
  };

  openNotificationWithIcon2 = type => {
    notification[type]({
      message: "Failed",
      description: "Something went wrong."
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
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  render() {
    if (this.state.reqStatus) {
      this.openNotificationWithIcon("success");
    }
    if (this.state.error) {
      this.openNotificationWithIcon2("error");
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
          {/* <Button className="action-btn-cancel">Cancel</Button> */}
        </div>
      </div>
    );
  }
}

export default VacationFormContent;
