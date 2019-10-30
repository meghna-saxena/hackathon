import React, { Component } from "react";
import Chart from "react-apexcharts";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {},
      vacations: [44, 17, 15],
      labels: ["Pending", "Availed", "Remaining"],
      legend: {
        show: true,
      }
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.vacations}
          labels={this.state.labels}
          type="donut"
          width="380"
        />
      </div>
    );
  }
}

export default Donut;
