import * as React from "react";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const DatePickerComponent: React.FC = () => {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return <RangePicker onChange={onChange} />;
};

export default DatePickerComponent;
