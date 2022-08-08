/* eslint-disable linebreak-style */
import React from 'react';
import { Box } from '@mui/material';
import Login from '../components/Login.jsx';
import Sign from '../components/SignIn.jsx';

function Nav() {
  return (
    <Box className="Nav">
      <Box className="Logo">
      <div>Lumos</div>
      </Box>
      <Box className="ButtonContainer">
      <Login />
      <Sign />
      </Box>
    </Box>
  );
}

export default Nav;
