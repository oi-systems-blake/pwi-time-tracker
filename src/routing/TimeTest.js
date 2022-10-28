import React from "react";
import { format } from "date-fns";
import { getTimeSheet } from "../graphql/queries";
import { API } from "aws-amplify";
import { listTimeSheets } from "../graphql/queries";
import { graphqlOperation } from "aws-amplify";
import { useState

} from "react";
export default function TimeTest() {
 let [arrayLength, setArrayLength] = useState("")
  
  let dater = new Date();
  let y = dater.toLocaleTimeString();



  function Stamp() {
    const month = format(dater, "MMMM");
    const year = format(dater, "yyyy");
    const dayNumber = format(dater, "d");
    const dayName = format(dater, "EEEE");
    const actual = format(dater, "PPPP");
    const exactTime = format(dater, "pp");
    const x = 1234;
    console.log("stamp", exactTime);
    console.log("actual", actual);

    // const checkTimeSheet = API.graphql({
    //   query: getTimeSheet,
    //   variables: {
    //     id: "",
    //     date: actual,
    //     employeeID: x,

    //   },
    // });
    // checkTimeSheet.then((sheet) => {console.log(sheet)})
    // console.log("jere we jo", checkTimeSheet);

    const listTimer = API.graphql(
      graphqlOperation(listTimeSheets, {
        filter: {
          employeeID: {
            contains: "1234",
          },
          date: {
            contains: "Thursday, October 27th, 2022",
          },
        },
      })
    );
    listTimer.then((sheet) => {
      return sheet.data.listTimeSheets.items.length;
    }).then((x) => {setArrayLength(x)})

    console.log("jere we jo", arrayLength);
  }

  return (
    <>
      <h1>{arrayLength}</h1>
      <button onClick={Stamp}>STAMP</button>
    </>
  );
}
