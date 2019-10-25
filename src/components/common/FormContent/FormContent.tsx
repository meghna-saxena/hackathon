import * as React from "react";
import DatePicker from "../DatePicker/DatePicker";
// import { Layout } from "antd";
import { Button, Menu, Dropdown } from "antd";
// const { Header, Footer, Sider, Content } = Layout;
// import { Input } from "antd";
import { Input, Tooltip, Icon } from "antd";
import "./FormContent.css";

import axios from "axios";

const { TextArea } = Input;

const MEGGIE_TOKEN =
  "eyJleHBpcmVzQXQiOjE1NzE5ODA1NzUsImFjY2Vzc190b2tlbiI6InlhMjkuSWwtcEI2Y3hxbnRmaXE2THBOSGJxNlpqZjZVRHJleGlES3FyajJXQWJqaEFEaW82MGZzb2FEV3lfT2FJWnM3bTYxODN2SVFVUTFCZlVYb1VnaUNZX19wcVZkSGw1UUNEa01JdEFjTWtIZzEyQW5hTDhzR3hGbUtwZ2RETXR4UUVMdyIsInJlZnJlc2hfdG9rZW4iOiIxLy8wOTZOeDVCSzVZbjVoQ2dZSUFSQUFHQWtTTndGLUw5SXJMWDQ2YW5XaW9ua3llaTR4d3BsandyQ21CWGwyLVBFYXJ1OEtIUTYzQ01aX05LNmdsZXFpS1hDZXNuYmExcDdvS2NjIiwidXNlcm5hbWUiOiJtZWdobmEuc3JpdmFzdGF2YUBhdXRvMS5jb20iLCJyb2xlcyI6W119";

class FormContent extends React.Component<any, any> {
  state = {
    dateFrom: null,
    dateTo: null
  };

  handleDateOfVacation = e => {
    this.setState({ dateFrom: e[0], dateTo: e[1] });
  };

  handleSubmitForm = () => {
    // axios
    //   .post(
    //     "https://api-gate.qa.eagle.auto1.team/v1/people-directory/profile/me/holiday",
    //     profile
    //   )
    //   .then(res => {
    //     return res;
    //   });

    console.log("submit clicked");
  };

  render() {
    console.log("state", this.state);
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
