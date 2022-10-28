import { Link } from "react-router-dom";
import { TimeClock } from "./Components/TimeClock";
import "./Css/ClockIn.style.css";
import { useState } from "react";
import ClockInModal from "./Modals/ClockInModal";
import ErrorModal from "./Modals/ErrorModal";
import TimeTest from "../../routing/TimeTest";
import { secure } from "../../Secret";
import { set } from "date-fns";
import SideButton from "./Modals/SideButton";
import TimesheetCreator from "../../graphql/custom/TimesheetCreator";
import { format } from "date-fns";
import { listTimeSheets } from "../../graphql/queries";
import { createTimeSheet } from "../../graphql/mutations";
import { graphqlOperation } from "aws-amplify";
import { API } from "aws-amplify";

export function ClockIn() {
  let [successTrigger, setSuccessTrigger] = useState(false);
  let [pin, setPin] = useState("");
  let [employees, setEmployees] = useState("0");
  let [errorTrigger, setErrorTrigger] = useState(false);
  let [sideTrigger, setSideTrigger] = useState(false);
  // let [arrayLength, setArrayLength] = useState("");

  let Airtable = require("airtable");
  let base = new Airtable({ apiKey: secure }).base("appqrmdFurNYpsDKm");
  let airTableApiEmployeeTable = base("Employees");

  let dater = new Date();
  const month = format(dater, "MMMM");
  const year = format(dater, "yyyy");
  const dayNumber = format(dater, "d");
  const dayName = format(dater, "EEEE");
  const actualDate = format(dater, "PPPP");
  const exactTime = format(dater, "pp");

  const handlePinInputChange = (event) => {
    setPin(event.target.value);
  };

  function triggerStatement(modal) {
    modal(true);
    setTimeout(() => {
      modal(false);
    }, 2500);
    setPin("");
  }

  async function empExists() {
    const records = await airTableApiEmployeeTable
      .select({
        view: "Active Employees",
        filterByFormula: "({pin} = '" + pin + "')",
      })
      .all();
    console.log("disn", records);
    try {
      console.log(records[0].fields);
      return records[0].fields;
    } catch (error) {
      return 0;
    }
  }
  async function TimeSheetExists() {
    const checker = await API.graphql(
      graphqlOperation(listTimeSheets, {
        filter: {
          date: {
            contains: actualDate,
          },
          employeeID: {
            contains: pin,
          },
        },
      })
    );
    console.log(checker.data.listTimeSheets.items.length);
    return checker.data.listTimeSheets.items.length;
    // checker
    //   .then((sheet) => {
    //     console.log(sheet);
    //     return sheet.data.listTimeSheets.items.length;
    //   })
    // .then((x) => {
    //   setArrayLength(x);
    //   return x;
    // });
  }

  async function TimeSheetFlow() {
    let j = await TimeSheetExists();
    console.log(j);
    if (j === 0) {
      let k = await TimeSheetCreate();
      return console.log(k);
    } else if (j === 1) {
      return console.log("add a punch to TS plz");
    } else if (j > 1) {
      return console.log("must be an error yo");
    }
  }

  // let taco = [];

  // taco[0] = [];
  // taco[0].push("7am taco");
  // taco[0].push("8am taco");
  // console.log(taco[0].length % 2);
  // let lastIndex = taco.length - 1;

  // if (taco[lastIndex].length % 2 === 0) {
  //   taco.push(["10am Taco"]);
  // } else {
  //   taco[lastIndex].push("11am Taco ");
  // }



  
  console.log(taco);
  async function TimeSheetCreate() {
    const TimerDetails = {
      dayName: dayName,
      dayNumber: dayNumber,
      punches: exactTime,
      month: month,
      year: year,
      date: actualDate,
      employeeID: pin,
    };
    const newTimeSheet = await API.graphql(
      graphqlOperation(createTimeSheet, { input: TimerDetails })
    );
    return newTimeSheet.data;
  }

  const ClockInFunction = async () => {
    if ((pin + "").length > 4 || (pin + "").length < 4) {
      return triggerStatement(setErrorTrigger);
    }
    const empData = await empExists();
    try {
      await console.log(empData);
    } catch (error) {
      triggerStatement(setErrorTrigger);
    }
    if ((await empData) !== 0) {
      await setEmployees(empData["Preferred Name"]);
      await console.log("employee is", employees);
      await TimeSheetFlow();

      triggerStatement(setSuccessTrigger);
      return setTimeout(() => {
        setEmployees("");
        setPin("");
      }, 2500);
    } else {
      console.log("shes empty", empData);
      triggerStatement(setErrorTrigger);
      return setPin("");
    }
  };

  return (
    <div className="clock page">
      <div className="clock-container">
        <TimeClock />
        <div className="clock-clock-input">
          {/* <h1>{arrayLength}</h1> */}
          <input
            id="clock-clock-input-specific"
            type="text"
            placeholder="Enter 4 Digit Pin"
            onChange={handlePinInputChange}
            value={pin}
          ></input>
        </div>
        <div className="clock-clock-button">
          <button
            className="clock special-button"
            variant="warning"
            onClick={ClockInFunction}
          >
            Clock In/Out
          </button>
        </div>
        <div className="clock-timesheet-button">
          <Link to="/viewtimesheet/:1245">
            <button id="clock-timesheet-button-specific" variant="warning">
              View Timesheet
            </button>
          </Link>
        </div>
        <div className="admin-path-button">
          <Link to="/admin">
            <button variant="outline-warning">Admin Path</button>
          </Link>
          <button variant="outline-warning">Sign Out</button>
        </div>
        <ClockInModal
          name={employees}
          trigger={successTrigger}
          setTrigger={setSuccessTrigger}
        />
        <ErrorModal trigger={errorTrigger} setTrigger={setErrorTrigger} />

        <SideButton trigger={sideTrigger} setTrigger={setSideTrigger} />
        {/* <TimesheetCreator /> */}
        {/*  <TimeTest /> */}
      </div>
    </div>
  );
}
