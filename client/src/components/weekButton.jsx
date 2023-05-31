import React, { useContext } from "react";
import { Button } from "@mui/material";
import { InfoContext } from "../containers/MainContainer.jsx";

// lottie icons
import Lottie from "lottie-react";
import dashboardIcon from "../assets/lotties/dashboardIcon.json";

export default function WeekButton() {
  const [userInfo, setUserInfo] = useContext(InfoContext);

  //run a fetch request to metric router time period 24hr
  let start = new Date(Math.round(new Date().getTime()) - 24 * 7 * 3600 * 1000);
  start.toISOString();
  const end = new Date();
  const submitHandler = (e) => {
    e.preventDefault();
    // fetch to metric endpoint
    fetch("/metric", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ startTime: start, endTime: end, period: 86400 }),
    })
      .then((response) => response.json())
      .then((data) => {
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
          timePeriod: "week",
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
      <div className="sideBarLottie">
        <Lottie
          animationData={dashboardIcon}
          loop={true}
          onClick={submitHandler}
        />
      </div>
      <span className="sidebarIconText">Week</span>
    </div>
  );
}
