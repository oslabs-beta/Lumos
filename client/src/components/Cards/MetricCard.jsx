import React, { useContext } from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  CardHeader,
  Badge,
} from "@mui/material";
import Lottie from "lottie-react";
import lambdaFuncAnimation from "../../assets/lotties/lambda-funcs.json";
import errorsAnimation from "../../assets/lotties/errors.json";
import costAnimation from "../../assets/lotties/cost.json";
import durationAnimation from "../../assets/lotties/duration.json";
import { InfoContext } from "../../containers/MainContainer.jsx";

export default function MetricCard() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
  return (
    <>
      <Box container className="Active-Functions metricCard">
        <div className="cardStats">
          <div className="statsNumber">{userInfo.lambdaActiveInvocations}</div>
          {/* <div className="cardPercentage">+5%</div> */}
          <div className="cardTitle">Active Invocations</div>
        </div>
        <div className="cardIcon">
          <div className="iconWrapper">
            <Lottie animationData={lambdaFuncAnimation} loop={true} />
          </div>
        </div>
      </Box>
      <Box container className="Total-Errors metricCard">
        <div className="cardStats">
          <div className="statsNumber">{userInfo.lambdaTotalErrors}</div>
          {/* <div className="cardPercentage">+5%</div> */}
          <div className="cardTitle">Total Errors</div>
        </div>
        <div className="cardIcon">
          <div className="iconWrapper">
            <Lottie animationData={errorsAnimation} loop={false} />
          </div>
        </div>
      </Box>
      <Box container className="Avg-Cost metricCard">
        <div className="cardStats">
          <div className="statsNumber">
            {userInfo.lambdaTotalCost.toFixed(10)}
          </div>
          {/* <div className="cardPercentage">+5%</div> */}
          <div className="cardTitle">
            Total Cost <span className="superSet">(10^3)</span>
          </div>
        </div>
        <div className="cardIcon">
          <div className="iconWrapper">
            <Lottie animationData={costAnimation} loop={false} />
          </div>
        </div>
      </Box>
      <Box container className="Avg-Duration metricCard">
        <div className="cardStats">
          <div className="statsNumber">
            {(
              userInfo.lambdaAvgDuration / userInfo.lambdaActiveInvocations
            ).toFixed(2)}
          </div>
          {/* <div className="cardPercentage">+5%</div> */}
          <div className="cardTitle">Avg Duration (ms)</div>
        </div>
        <div className="cardIcon">
          <div className="iconWrapper">
            <Lottie animationData={durationAnimation} loop={false} />
          </div>
        </div>
      </Box>
    </>
  );
}
