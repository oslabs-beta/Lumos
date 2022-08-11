/* eslint-disable linebreak-style */
import React from 'react';
import { Grid, Box } from '@mui/material';
import dayButton from './dayButton';
import weekButton from './weekButton';
import monthButton from './monthButton';


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
