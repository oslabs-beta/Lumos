import React, { useContext, useEffect } from "react";
import { Button } from "@mui/material";
// gain access to context
import { InfoContext } from "../containers/MainContainer.jsx";

export default function DayButton() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
  //if userInfo.loggedIn !== return 'you must be signed in'  else submithandler

  const submitHandler = (e) => {
    e.preventDefault();

    let start = new Date(Math.round(new Date().getTime() - 24 * 3600 * 1000));

    start.toISOString();

    const end = new Date();

    console.log(start);
    console.log("I am the 24hr button");

    fetch("/metric", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        startTime: start,
        endTime: end,
        period: 60
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("RESPONSE DATA: ", data);
        console.log("RESPONSE DATA TYPE: ", typeof data);
        // update state obj with data values
        let sum = 0;
        data.metrics.forEach((el) => {
          sum += el.totalInvocations;
        });

        setUserInfo({
          lambdaFuncs: data.metrics,
          lambdaActiveInvocations: sum,
          lambdaTotalErrors: 3,
          lambdaAvgThrottle: 40, 
          lambdaAvgDuration: 4.3 
        });

        // lambdaFuncs: [{ funcName: "", totalInvocations : 0, totalErrors: 0, timeStamps: [], funcValues: [] }],
        // lambdaActiveInvocations: 0,

        console.log("UPDATED STATE: ", userInfo);
        // useEffect(() => console.log(userInfo), [userInfo]);
      });
    return false;
  };
  return (
    <>
      <Button className='LumosButton' onClick={submitHandler}>
        24hr
      </Button>
    </>
  );
}
