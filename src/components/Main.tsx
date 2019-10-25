import * as React from "react";
import img from "../images/meggieHome.png";
import { withRouter } from "react-router-dom";

export interface IAppProps {}

class Main extends React.Component<any, {}> {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  renderImg = () => {
    // href = "/request-holiday";
    // target = "_blank";

    this.props.history.push("/request-holiday");
  };
  render() {
    let myLink: any = "";
    if (!this.state.loading) {
      myLink = (
        <a
          href="/request-holiday"
          target="_blank"
          style={{
            zIndex: 1111,
            background: "none",
            bottom: 400,
            position: "absolute",
            top: "300px",
            width: "200px",
            height: "50px",
            color: "orange",
            right: "180px",
            marginTop: "12px"
          }}
        >
          Request holiday
        </a>
      );
    }
    return (
      <div>
        <img
          src={img}
          onClick={this.renderImg}
          style={{ cursor: 'pointer', width: "100%" }}
        ></img>
        {/* <a
          href="/request-holiday"
          style={{
            zIndex: 1111,
            background: "none",
            bottom: 400,
            position: "absolute",
            top: "300px",
            width: "200px",
            height: "50px",
            color: "orange",
            right: "180px",
            marginTop: "12px"
          }}
        >
          Request holiday
        </a> */}
        {/* {myLink} */}
      </div>
    );
  }
}

export default withRouter(Main);
