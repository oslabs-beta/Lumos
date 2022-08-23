/* eslint-disable linebreak-style */
import React from 'react';
import { Box } from '@mui/material';
import Latency from '../components/charts/Latency.jsx';
import TestChart from '../components/charts/TestChart.jsx'

function Charts() {
  return (
    <Box className="Charts">
      {/* <div className="cardTitle">Usage</div> */}
      <div className="latencyChartContainer"> {/* not really latency, just invocation count */}
      {/* <Latency /> */}
      <TestChart />
      </div>
    </Box>
  );
}

export default Charts;
