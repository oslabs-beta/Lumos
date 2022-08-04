/* eslint-disable linebreak-style */
import React from 'react';
import {
  Grid, Container, AppBar, Box, Header, Footer,
} from '@mui/material';

export function MainContainer() {
  // Full viewport, inner grid system
  const outerGridContainer = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '50px 1fr 50px',
    height: '100vh',
    gap: '0px 0px',
    gridTemplateAreas: `    
      "Header"
      "CardContainer"
      "Footer"`,
  };

  return (
    <Grid Container sx={outerGridContainer}>
      {/* <InfoContext.Provider value={[userInfo, setUserInfo]}> */}
      <Box item sx={{ gridArea: 'Header' }}>
        <Header />
      </Box>
      <Grid Container sx={innerGridContainer} />

      <Box item sx={{ gridArea: 'Footer' }}>
        <Footer />
      </Box>
      {/* </InfoContext.Provider> */}
    </Grid>
  );
}

export default MainContainer;
