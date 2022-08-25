/* eslint-disable linebreak-style */
import React from "react";
import { Box } from "@mui/material";
import Latency from "../components/charts/Latency.jsx";
import LineChart from "../components/charts/TestChart.jsx";

function Charts() {
  return (
    <Box className="Charts">
      <div className="latencyChartContainer">
        <LineChart />
      </div>
    </Box>
  );
}

export default Charts;
