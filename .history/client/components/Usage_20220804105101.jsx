/* eslint-disable linebreak-style */
import React from 'react';
import { Box } from '@mui/material';
import UsageDoughnut from '../components/charts/UsageDoughnut.jsx';


function Usage() {
  return (
    <Box className="Usage">
      <div className="cardTitle">Usage</div>
      <UsageDoughnut />
    </Box>
  );
}

export default Usage;
