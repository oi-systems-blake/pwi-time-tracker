import React from "react";
import { useState } from "react";
import ClockInModal from "../Modals/ClockInModal";
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { useEffect } from 'react';
import {listEmployees} from '../../../graphql/queries'
import ClockInTimesheetButton from './ClockInTimesheetButton'

export default function ClockInInput() {
  const [clockInButtonPopup, setClockInButtonPopup] = useState(false);
  const [currentUserId, setCurrentUserId] = useState("");

  function ClockInFunction() {
    setClockInButtonPopup(true);
    setTimeout(() => {
      setClockInButtonPopup(false);
    }, 2500);
  }

  const handleChange = (event) => {
    setCurrentUserId(event.target.value);
  };

  return (
    <>
      <div className="clock-clock-input">
        <input
          id="clock-clock-input-specific"
          type="password"
          placeholder="Enter 4 Digit Pin"
          onChange={handleChange}
          value={currentUserId}
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
        <ClockInTimesheetButton />
        <ClockInModal
        currentUserId={currentUserId}
          trigger={clockInButtonPopup}
          setTrigger={setClockInButtonPopup}
        />
      </div>
    </>
  );
}
