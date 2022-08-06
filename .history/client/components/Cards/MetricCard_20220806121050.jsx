import React from "react";
import { Box, Card, CardContent, Divider, Typography, CardHeader, Badge } from "@mui/material"
import { useLottie } from "lottie-react";
import lambdaFuncAnimation from "../../assets/lotties/lambda-funcs.json";



export default function MetricCard() {
  const options = {
    animationData: lambdaFuncAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  return (
    <>
    <Box container className="Active-Functions metricCard">
      <div className="cardStats">
       <div className="statsNumber">61</div>
       <div className="cardPercentage">+5%</div>
       <div className="cardTitle">Active Functions</div>
      </div>
      <div className="cardIcon">
      {/* <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
    <lord-icon
    src="https://cdn.lordicon.com/zpbxuaab.json"
    trigger="hover"
    style="width:250px;height:250px">
    </lord-icon> */}
      </div>
    </Box>
    <Box container className="Total-Errors metricCard">
      <div className="cardStats">
       <div className="statsNumber">61</div>
       <div className="cardPercentage">+5%</div>
       <div className="cardTitle">Total Errors</div>
      </div>
      <div className="cardIcon">
        <div>+</div>
      </div>
    </Box>
    <Box container className="Avg-Cost metricCard">
      <div className="cardStats">
       <div className="statsNumber">61</div>
       <div className="cardPercentage">+5%</div>
       <div className="cardTitle">Avg Cost</div>
      </div>
      <div className="cardIcon">
        <div>+</div>
      </div>
    </Box>
    <Box container className="Avg-Duration metricCard">
      <div className="cardStats">
       <div className="statsNumber">61</div>
       <div className="cardPercentage">+5%</div>
       <div className="cardTitle">Avg Duration</div>
      </div>
      <div className="cardIcon">
        <div>+</div>
      </div>
    </Box>
    </>
  );
}
