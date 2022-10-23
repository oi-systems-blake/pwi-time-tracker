import { Link } from "react-router-dom";
import { TimeClock } from "./Components/TimeClock";
import "./Css/ClockIn.style.css";
import { useState, useEffect } from "react";
import ClockInInput from "./Components/ClockInInput";
import ClockInModal from "./Modals/ClockInModal";
import ErrorModal from "./Modals/ErrorModal";
import { API, graphqlOperation } from "aws-amplify";
import Airtable, { Table } from "airtable";
import { secure } from "../../Secret";
import { set } from "date-fns";
import SideButton from "./Modals/SideButton";

export function ClockIn() {
  let [successTrigger, setSuccessTrigger] = useState(false);
  let [pin, setPin] = useState("");
  let [employees, setEmployees] = useState("0");
  let [errorTrigger, setErrorTrigger] = useState(false);
  let [sideTrigger, setSideTrigger] = useState(false);

  let Airtable = require("airtable");
  let base = new Airtable({ apiKey: secure }).base("appqrmdFurNYpsDKm");
  let table = base("Employees");

  const handleChange = (event) => {
    setPin(event.target.value);
  };

  function triggerStatement(x) {
    x(true);
    setTimeout(() => {
      x(false);
    }, 2500);
    setPin("");
  }

  async function empExists() {
    const records = await base("Employees")
      .select({
        view: "Active Employees",
        filterByFormula: "({pin} = '" + pin + "')",
      })
      .all();
    console.log("disn", records);
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
    try {
      return records[0].fields;
    } catch (error) {
      setErrorTrigger(true);
      setTimeout(() => {
        setErrorTrigger(false);
      }, 2500);
    }
    // .eachPage(
    //     function page(records, fetchNextPage) {
    //     // This function (`page`) will get called for each page of records.

    //     // records.forEach(function (record) {
    //     //   console.log("Retrieved", record.get("Preferred Name"));
    //     // });
    //     // console.log("does this have the pin:", pin);
    //     // To fetch the next page of records, call `fetchNextPage`.
    //     // If there are more records, `page` will get called again.
    //     // If there are no more records, `done` will get called.
    //     fetchNextPage();
    //     console.log(records);
    //     setEmployees(records)
    //   },
    //   function done(err) {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }
    //   }
    // );
  }

  // function triggerStatement() {
  //   setErrorTrigger(true);
  //   setTimeout(() => {
  //     setErrorTrigger(false);
  //   }, 2500);
  //   setPin("");
  // }

  const ClockInFunction = async () => {
    if ((pin + "").length > 4 || (pin + "").length < 4) {
      return triggerStatement(setErrorTrigger);
    }
    const x = await empExists();
    try {
      await setEmployees(x["Preferred Name"]);
    } catch (error) {
      triggerStatement(setErrorTrigger);
    }
    console.log("employees = ", employees);
    console.log("x is", x);
    if (x != 0) {
      triggerStatement(setSuccessTrigger);
      return setTimeout(() => {
        setEmployees("");
        setPin("");
      }, 2500);
    } else {
      console.log("shes empty");
      triggerStatement(setErrorTrigger);
      return setEmployees(""), setPin("");
    }
  };

  return (
    <div className="clock page">
      <div className="clock-container">
        <TimeClock />
        <div className="clock-clock-input">
          <input
            id="clock-clock-input-specific"
            type="text"
            placeholder="Enter 4 Digit Pin"
            onChange={handleChange}
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
          <div className="clock-timesheet-button">
            <Link to="/viewtimesheet/:1245">
              <button id="clock-timesheet-button-specific" variant="warning">
                View Timesheet
              </button>
            </Link>
          </div>
          <ClockInModal
            name={employees}
            trigger={successTrigger}
            setTrigger={setSuccessTrigger}
          />
          <ErrorModal trigger={errorTrigger} setTrigger={setErrorTrigger} />
          <button
            id="side-button"
            onClick={() => triggerStatement(setSideTrigger)}
          >
            New MODALLLLLLLLLLLLLLLLLL
          </button>
          <SideButton trigger={sideTrigger} setTrigger={setSideTrigger} />
        </div>
      </div>
      <div className="admin-path-button">
        <Link to="/admin">
          <button variant="outline-warning">Admin Path</button>
        </Link>
        <button variant="outline-warning">Sign Out</button>
      </div>
    </div>
  );
}
