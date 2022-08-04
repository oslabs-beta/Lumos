/* eslint-disable linebreak-style */
import React from 'react';
import { Box } from '@mui/material';




function Header() {
  const navBarContainer = {
    display: "grid", 
    grid-template-columns: "5fr 1fr 1fr 1fr 2fr", 
    grid-template-rows: 1fr,
    gap: 0px 0px; 
    grid-template-areas: ". . . . .";
    grid-area: "Nav";
  }
  
  
  return (
    <Box>HEADER HERE</Box>
  );
}

export default Header;
