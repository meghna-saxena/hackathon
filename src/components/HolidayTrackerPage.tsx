import * as React from "react";

import StatusList from "./common/StatusList/StatusList";

export interface IAppProps {}

export default class HolidayTrackerPage extends React.Component<IAppProps> {
  public render() {
    return <StatusList />;
  }
}
