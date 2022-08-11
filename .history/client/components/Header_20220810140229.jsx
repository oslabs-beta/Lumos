/* eslint-disable linebreak-style */
import React from 'react';
import { Grid, Box } from '@mui/material';
import DayButton from './dayButton';
import WeekButton from './weekButton';
import MonthButton from './monthButton';


function Header() {
  return (
    <Box className="Header">
      <DayButton />
      <WeekButton />
      <MonthButton />
    </Box>
  );
}

export default Header;
