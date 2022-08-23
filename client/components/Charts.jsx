/* eslint-disable linebreak-style */
import React from "react";
import { Box } from "@mui/material";
import Latency from "../components/charts/Latency.jsx";
import Carmen from "../components/charts/TestChart.jsx";
import Mario from '../components/charts/MarioTestChart.jsx';
import Addy from '../components/charts/AddyTestChart.jsx';

function Charts() {
  return (
    <Box className="Charts">
      {/* <div className="cardTitle">Usage</div> */}
      <div className="latencyChartContainer">
        {/* <Latency /> */}
        <Carmen />
        {/* <Mario /> */}
        {/* <Addy /> */}
      </div>
    </Box>
  );
}

export default Charts;
