/* eslint-disable linebreak-style */
import React from 'react';
import { Box } from '@mui/material';
import Latency from '../components/charts/Latency.jsx';

function Charts() {
  return (
    <Box className="Charts">
    {/* <div className="cardTitle">Usage</div> */}
    <div className="chartContainer">
    <Latency />
    </div>
  </Box>
  );
}

export default Charts;
