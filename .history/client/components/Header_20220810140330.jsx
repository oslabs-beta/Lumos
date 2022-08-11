/* eslint-disable linebreak-style */
import React from 'react';
import { Grid, Box } from '@mui/material';
import dayButton from './dayButton.jsx';
import weekButton from './weekButton.jsx';
import monthButton from './monthButton.jsx';


function Header() {
  return (
    <Box className="Header">
      <dayButton />
      <weekButton />
      <monthButton />
    </Box>
  );
}

export default Header;
