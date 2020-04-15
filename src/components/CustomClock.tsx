import React, { useState, useEffect } from "react";
import Clock from "react-clock";

const CustomClock = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);
  return <Clock value={date} />;
};

export default CustomClock;
