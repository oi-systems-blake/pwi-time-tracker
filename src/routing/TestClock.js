import React from "react";
import TimeClock from "../pages/ClockInPage/Components/TimeClock";
import { useState } from "react";
import Fetch from "../airTable/Fetch";
import EmpQuery from "../graphql/custom/EmpQuery";
import { API, graphqlOperation } from "aws-amplify";

export default function TestClock() {
  
  
  
  
  
  
  
  const [pin, setPin] = useState("");
  const eventDetails = {
    id: "6969",
    month: "May",
    year: "2022",
    dayNumber: 5,
    dayName: "mon",
    employeeID: "1234",
    projectsID: "6868",
  };

  const handleChange = (event) => {
    setPin(event.target.value);
    console.log("pin is", pin);
  };
  const callThisFromChild = (pin) => {
    console.log("child passed in", pin);
    return pin;
  };

  async function TimeStamp() {
    const createTimeSheet = /* GraphQL */ `
  mutation CreateTimeSheet(
    $input: CreateTimeSheetInput!
    $condition: ModelTimeSheetConditionInput
  ) {
    createTimeSheet(input: $input, condition: $condition) {
      id
      month
      year
      dayNumber
      dayName
      hours
      total_hours_day
      employeeID
      projectsID
      createdAt
      updatedAt
    }
  }
`;
    
    
    
    let x = new Date();
    let y = x.toLocaleTimeString();
    console.log("y is ", x);



    const newProj = await API.graphql(
      graphqlOperation(createTimeSheet, { input: eventDetails })
    );
    console.log(newProj);
    return y;
  }

  return (
    <>
      <EmpQuery />
      <div>
        <TimeClock />
        <Fetch pin={pin} callback={callThisFromChild} />
        <button onClick={TimeStamp}>clock in</button>
        <input type="text" value={pin} onChange={handleChange}></input>

        <h1>{pin}</h1>
      </div>
    </>
  );
}
