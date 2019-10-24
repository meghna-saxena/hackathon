import * as React from "react";

export interface IAppProps {}

export default class Main extends React.Component<IAppProps, {}> {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: false });
  }
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
        <iframe
          src="https://inside.auto1-group.com"
          style={{ height: "1080px", width: "100%" }}
        ></iframe>
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
        {myLink}
      </div>
    );
  }
}
