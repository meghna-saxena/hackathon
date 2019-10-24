import * as React from "react";
import DatePicker from "../DatePicker/DatePicker";
// import { Layout } from "antd";
import { Button, Menu, Dropdown } from "antd";
// const { Header, Footer, Sider, Content } = Layout;
// import { Input } from "antd";
import { Input, Tooltip, Icon } from "antd";
import "./FormContent.css";

const { TextArea } = Input;

const style = {
  width: "600px",
  height: "200px",
  margin: "auto",
  transform: "translate(50px, 50px)"
};

const FormContent: React.FC = () => {
  return (
    <div style={style}>
      <h1>Holiday Request</h1>
      <br />
      <p style={{ fontSize: "16px" }}>
        <span style={{ background: "beige" }}>Meghna Srivastava</span> please
        fill the holiday request form at the latest 4 weeks before the start of
        your holidays. We cannot accept holiday requests which we receive after
        this period
      </p>
      <br />
      <br />
      <br />
      <DatePicker />
      <br />
      <br />
      <Tooltip title="Reason for leave - optional" placement="rightBottom">
        {/* <Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} /> */}
        <TextArea
          style={{ width: "400px" }}
          rows={4}
          placeholder="Reason for leave"
        />
      </Tooltip>
      {/* <Input
        placeholder="Reason for leave"
        prefix={<Icon type="message" style={{ color: "rgba(0,0,0,.25)" }} />}
        suffix={
          <Tooltip title="Reason for leave - optional">
            <Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
          </Tooltip>
        }
      /> */}
      <br />
      <Button
        className="action-btn"
        style={{ marginRight: "25px", marginTop: "100px" }}
        type="primary"
      >
        Submit
      </Button>
      <Button className="action-btn-cancel">
        Cancel
      </Button>
    </div>
  );
};

export default FormContent;
