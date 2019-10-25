import * as React from "react";

import StatusList from "./common/StatusList/StatusList";
import PieChart from "./PieChart/PieChart.jsx";

export interface IAppProps {}

export default class HolidayTrackerPage extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        {/* <PieChart /> */}
        <StatusList />;
      </div>
    );
  }
}
