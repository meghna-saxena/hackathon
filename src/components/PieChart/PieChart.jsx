import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      vacations: [44, 17, 15],
      labels: ['Pending', 'Availed', 'Remaining']
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.vacations} type="donut" width="380" />
      </div>
    );
  }
}

export default Donut;