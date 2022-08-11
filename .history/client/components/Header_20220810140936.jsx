/* eslint-disable linebreak-style */
import React from 'react';
import { Grid, Box } from '@mui/material';
import DayButton from './dayButton.jsx';
import WeekButton from './weekButton.jsx';
import MonthButton from './monthButton.jsx';


function Header() {
  return (
    <Box className="Header">
      <div className="timeButtonContainer">
      <DayButton />
      <WeekButton />
      <MonthButton />
      </div>
    </Box>
  );
}

export default Header;
