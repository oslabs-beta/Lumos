import React from "react";
import { Box, Card, CardContent, Divider, Typography, CardHeader, Badge } from "@mui/material"



export default function MetricCard() {
  return (
    <>
    <Box container className="Active-Functions metricCard">
      <div className="cardStats">
       <div className="statsNumber">61</div>
       <div className="cardPercentage">+5%</div>
       <div className="cardTitle">Active Functions</div>
      </div>
        <Divider light />
        <div className="cardIcon"></div>

    </Box>
    <Box container className="Total-Errors metricCard">
        <div className="cardIcon"></div>
        <div className="cardPercentage">+5%</div>
        <div className="cardStats">11</div>
        <Divider light />
        <div className="cardTitle"></div>
    </Box>
    <Box container className="Avg-Cost metricCard">
        <div className="cardIcon"></div>
        <div className="cardPercentage">+5%</div>
        <div className="cardStats">26</div>
        <Divider light />
        <div className="cardTitle"></div>
    </Box>
    <Box container className="Avg-Duration metricCard">
        <div className="cardIcon"></div>
        <div className="cardPercentage">+5%</div>
        <div className="cardStats">17</div>
        <Divider light />
        <div className="cardTitle"></div>
    </Box>
    </>
  );
}
