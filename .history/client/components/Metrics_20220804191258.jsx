/* eslint-disable linebreak-style */
import React from 'react';
import { Box } from '@mui/material';
import MetricCard from '../components/Cards/MetricCard.jsx'

function Metrics() {
  return (
    <Box className="Metrics">Metrics
      <MetricCard />
      <MetricCard />
      <MetricCard />
      <MetricCard />
    </Box>
  );
}

export default Metrics;