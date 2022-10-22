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

export function ClockIn() {
  let [clockInButtonPopup, setClockInButtonPopup] = useState(false);
  let [pin, setPin] = useState("");
  let [employees, setEmployees] = useState("0");
  let [trigger, setTrigger] = useState(false);

  let Airtable = require("airtable");
  let base = new Airtable({ apiKey: secure }).base("appqrmdFurNYpsDKm");
  let table = base("Employees");

  async function empExists() {
    const records = await base("Employees")
      .select({
        view: "Active Employees",
        filterByFormula: "({pin} = '" + pin + "')",
      })
      .all();
    console.log("disn", records);
    return records;
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

  const ClockInFunction = async () => {
    if ((pin + "").length != 4) {
      return;
    }
    const x = await empExists();
    await setEmployees(x);
    console.log("employees = ", employees);
    console.log("x is", x);;
    if (x != 0) {
      setClockInButtonPopup(true);
      setTimeout(() => {
        setClockInButtonPopup(false);
      }, 2500);
      return setEmployees(""), setPin("");
    } 
    else {
        console.log("shes empty");
        setTrigger(true);
        setTimeout(() => {
          setTrigger(false);
        }, 2500);
        return setEmployees(""), setPin("");
      }
  };

  const handleChange = (event) => {
    setPin(event.target.value);
  };

  return (
    <div className="clock page">
      <div className="clock-container">
        <TimeClock />
        <div className="clock-clock-input">
          <input
            id="clock-clock-input-specific"
            type="password"
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
            pin={pin}
            trigger={clockInButtonPopup}
            setTrigger={setClockInButtonPopup}
          />
          <ErrorModal trigger={trigger} setTrigger={setTrigger} />
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
