import React, { useContext } from "react";
import { Box, Card, CardContent, Divider, Typography, CardHeader, Badge } from "@mui/material"
import Lottie from "lottie-react";
import lambdaFuncAnimation from "../../assets/lotties/lambda-funcs.json";
import errorsAnimation from "../../assets/lotties/errors.json";
import costAnimation from "../../assets/lotties/cost.json";
import durationAnimation from "../../assets/lotties/duration.json";
import { InfoContext } from "../../containers/MainContainer.jsx";

export default function MetricCard() {
  // const lambdaOptions = {
  //   animationData: lambdaFuncAnimation,
  //   loop: true
  // };

  // const errorOptions = {
  //   animationData: errorsAnimation,
  //   loop: true
  // };

  // const { View } = useLottie(lambdaOptions);
  // const { View } = useLottie(errorOptions);
/*
send date object to backend to grab metrics
startTime
endTime
any metric name / invocations, errors, throttle, duration return a float number
period
 */

  const [userInfo, setUserInfo] = useContext(InfoContext);

  return (
    <>
    <Box container className="Active-Functions metricCard">
      <div className="cardStats">
       <div className="statsNumber">{userInfo.lambdaActiveInvocations}</div>
       <div className="cardPercentage">+5%</div>
       <div className="cardTitle">Active Invocations</div>
      </div>
      <div className="cardIcon">
      <div className="iconWrapper">
      <Lottie animationData={lambdaFuncAnimation} loop={true} />.
      </div>
      </div>
    </Box>
    <Box container className="Total-Errors metricCard">
      <div className="cardStats">
       <div className="statsNumber">61</div>
       <div className="cardPercentage">+5%</div>
       <div className="cardTitle">Total Errors</div>
      </div>
      <div className="cardIcon">
      <div className="iconWrapper">
      <Lottie animationData={errorsAnimation} loop={true} />
      </div>
      </div>
    </Box>
    <Box container className="Avg-Cost metricCard">
      <div className="cardStats">
       <div className="statsNumber">61</div>
       <div className="cardPercentage">+5%</div>
       <div className="cardTitle">Avg Throttle</div>
      </div>
      <div className="cardIcon">
      <div className="iconWrapper">
      <Lottie animationData={costAnimation} loop={true} />
      </div>
      </div>
    </Box>
    <Box container className="Avg-Duration metricCard">
      <div className="cardStats">
       <div className="statsNumber">61</div>
       <div className="cardPercentage">+5%</div>
       <div className="cardTitle">Avg Duration</div>
      </div>
      <div className="cardIcon">
        <div className="iconWrapper">
      <Lottie animationData={durationAnimation} loop={true} />
      </div>
      </div>
    </Box>
    </>
  );
}