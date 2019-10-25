import * as React from "react";
import { DatePicker } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;
const dateFormat = "YYYY-MM-DD";

interface IProps {
  handleValue: (string) => void;
  onChange: () => void;
}

const DatePickerComponent = (props: any) => {
  function onChange(date: any, dateString: [string, string]) {
    console.log(date, dateString);

    console.log("date", dateString);
    props.handleValue(dateString);
  }

  return <RangePicker onChange={onChange} format={dateFormat} />;
};

export default DatePickerComponent;
