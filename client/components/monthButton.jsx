import React, { useContext } from "react";
import { Button } from "@mui/material";
import { InfoContext } from "../containers/MainContainer.jsx";

// lottie icons
import Lottie from "lottie-react";
import dashboardIcon from "../assets/lotties/dashboardIcon.json";

export default function MonthButton() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
  //run a fetch request to metric router time period 24hr
  let start = new Date(
    Math.round(new Date().getTime()) - 24 * 30 * 3600 * 1000
  );
  start.toISOString();
  const end = new Date();
  //if userInfo.loggedIn !== return 'you must be signed in'  else submithandler
  const submitHandler = (e) => {
    e.preventDefault();
    fetch("/metric", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ startTime: start, endTime: end }),
    })
      .then((response) => response.json())
      .then((data) => {
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
          timePeriod: "month",
          lambdaFuncs: data.metrics,
          lambdaActiveInvocations: activeInvocations,
          lambdaTotalErrors: totalErrors,
          lambdaAvgThrottle: 41,
          lambdaTotalCost: totalCost,
          lambdaAvgDuration: totalDuration,
        });
      });
  };
  return (
    <div className="sidebarIcon">
      <Lottie
        animationData={dashboardIcon}
        loop={true}
        onClick={submitHandler}
      />
      <span className="sidebarIconText">Month</span>
    </div>
  );
}
