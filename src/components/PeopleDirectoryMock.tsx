import * as React from "react";
import { withRouter } from "react-router-dom";

import img from "../images/meggieHome.png";

class PeopleDirectoryMock extends React.Component<any, {}> {
  renderTimeOutApp = () => {
    this.props.history.push("/vacation-request");
  };

  render() {
    return (
      <div>
        <img
          src={img}
          onClick={this.renderTimeOutApp}
          style={{ cursor: "pointer", width: "100%" }}
        ></img>
      </div>
    );
  }
}

export default withRouter(PeopleDirectoryMock);
