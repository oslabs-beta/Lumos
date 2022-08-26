import React, { useContext, useEffect } from "react";
import { Button } from "@mui/material";
// gain access to context
import { InfoContext } from "../containers/MainContainer.jsx";

// lottie icons
import Lottie from "lottie-react";
import dashboardIcon from "../assets/lotties/dashboardIcon.json";

export default function DayButton() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
  //if userInfo.loggedIn !== return 'you must be signed in'  else submithandler

  const submitHandler = (e) => {
    e.preventDefault();
    let start = new Date(Math.round(new Date().getTime() - 24 * 3600 * 1000));
    start.toISOString();
    const end = new Date();

    fetch("/metric", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        startTime: start,
        endTime: end,
        period: 60,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("RESPONSE DATA: ", data);
        console.log("RESPONSE DATA TYPE: ", typeof data);
        // update state obj with data values
        let activeInvocations = 0;
        let totalErrors = 0;
        let totalDuration = 0;
        let totalCost = 0;
        data.metrics.forEach((el) => {
          activeInvocations += el.totalInvocations;
          totalErrors += el.totalErrors;
          totalDuration += el.totalDuration;
          totalCost += el.totalCost;
        });

        setUserInfo({
          loggedIn: true,
          timePeriod: "day",
          lambdaFuncs: data.metrics,
          lambdaActiveInvocations: activeInvocations,
          lambdaTotalErrors: totalErrors,
          lambdaAvgThrottle: 41,
          lambdaTotalCost: totalCost,
          lambdaAvgDuration: totalDuration,
        });
      });
    return false;
  };
  return (
    <>
      <div className="sidebarIcon">
        <div className="sideBarLottie">
          <Lottie
            animationData={dashboardIcon}
            loop={true}
            onClick={submitHandler}
          />
        </div>
        <span className="sidebarIconText">Day</span>
      </div>
    </>
  );
}
