import * as React from "react";
import { DatePicker } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;
const dateFormat = "DD/MM/YYYY";

const DatePickerComponent: React.FC = () => {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return <RangePicker onChange={onChange} format={dateFormat} />;
};

export default DatePickerComponent;
