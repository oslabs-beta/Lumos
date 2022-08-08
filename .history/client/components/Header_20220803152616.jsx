/* eslint-disable linebreak-style */
import React from 'react';
import { Grid, Box } from '@mui/material';




function Header() {
  const navBarContainer = {
    display: "grid",
    gridTemplateColumns: "5fr 1fr 1fr 1fr 2fr",
    gridTemplateRows: "1fr",
    gap: "0px 0px",
    gridTemplateAreas: ". . . . .",
    gridArea: "Nav"
  }
  
  
  return (
    <Box>HEADER HERE</Box>
  );
}

export default Header;
