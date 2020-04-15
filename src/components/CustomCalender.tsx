import React from "react";
import Calendar from "react-calendar";

interface CustomCalenderProps {
  calenderValue: Date;
  onCalenderValueChange: (value: any) => void;
}

const CustomCalender = ({
  calenderValue,
  onCalenderValueChange,
}: CustomCalenderProps) => (
  <Calendar value={calenderValue} onChange={onCalenderValueChange} />
);
export default CustomCalender;
