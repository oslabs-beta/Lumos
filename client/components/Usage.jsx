/* eslint-disable linebreak-style */
import React from "react";
import { Box } from "@mui/material";
import UsageDoughnut from "../components/charts/UsageDoughnut.jsx";
import Mario from "../components/charts/MarioTestChart.jsx";

function Usage() {
  return (
    <Box className="Usage">
      {/* <div className="cardTitle">Usage</div> */}
      <div className="usageChartContainer">
        {/* <UsageDoughnut /> */}
        <Mario />
      </div>
    </Box>
  );
}

export default Usage;
