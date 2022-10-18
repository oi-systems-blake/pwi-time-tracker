import { useAuthenticator } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import { TimeClock } from "./Components/TimeClock"
import { useNavigate } from "react-router-dom";
import "./Css/ClockIn.style.css"
import { useState, useEffect } from "react";
import ClockInInput from "./Components/ClockInInput"
import Base from '../../airTable/Base'
import Fetch from "../../airTable/Fetch";





let EMPLOYEE1 = {
  id: 1234,
  first_name: "Joel",
  last_name: "Fooster",
  supervisor: "Paige",
  status: false,
  normal_start_time: "7 AM",
  email: "e@mail.com",
};

export function ClockIn() {

  return (
    <div className="clock page">
      <div className="clock-container">
        <TimeClock /> 
        <ClockInInput />
      </div>
      <div className="admin-path-button">
      <Link to="/admin">
        <button variant="outline-warning">Admin Path</button>
      </Link>
      <button variant="outline-warning" onClick={console.log("fix me")}>
        Sign Out
      </button>
    </div>
    </div>
  );
}
