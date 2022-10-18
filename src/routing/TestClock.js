import React from "react";
import TimeClock from "../pages/ClockInPage/Components/TimeClock";
import { useState } from "react";
//import Base from "../airTable/Base";
import Fetch from "../airTable/Fetch";

const TIMESHEET1 = [
  {
    id: 1234,
    month: "May",
    dayNumber: 1,
    dayName: "Monday",
    hours: [
      ["8:00", "12:00"],
      ["13:00", "17:00"],
    ],
  },
];

export default function TestClock() {
  const [pin, setPin] = useState("");

  const handleChange = (event) => {
    setPin(event.target.value);
  };
  const callThisFromChild = (pin) => {
    console.log(`child passed in ${pin}`);
    return pin;
  };

  function TimeStamp() {
    let x = new Date();
    let y = x.toLocaleTimeString();
    console.log("y is ", y);

    return y;
  }

  return (
    <div>
      <TimeClock />
      <Fetch pin={pin} callback={callThisFromChild} />
      <button onClick={TimeStamp}>clock in</button>
      <input type="text" value={pin} onChange={handleChange}></input>

      <h1>{pin}</h1>
    </div>
  );
}
