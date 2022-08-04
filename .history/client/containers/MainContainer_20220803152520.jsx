/* eslint-disable linebreak-style */
import React from 'react';
import {
  Grid, Box,
} from '@mui/material';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SignIn from '../components/Signin.jsx';

function MainContainer() {
  // Full viewport, inner grid system
  const outerGridContainer = {
    display: 'grid',
    gridTemplateColumns: '160px 1fr 1fr 1fr',
    gridTemplateRows: '80px 80px 1fr 1fr 1fr 1fr 80px;',
    height: '100vh',
    gap: '0px 0px',
    background: 'gray',
    gridTemplateAreas: `    
    "Nav Nav Nav Nav"
    "Sidebar Header Header Header"
    "Sidebar Metrics Metrics Usage"
    "Sidebar Metrics Metrics Usage"
    "Sidebar Charts Charts Errors"
    "Sidebar Charts Charts Errors"
    "Footer Footer Footer Footer"`,
  };

  const innerGridContainer = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: '50% 50%',
    gap: '20px',
    height: '87vh',
    padding: '20px',
    gridTemplateAreas: ` 
      'Profile Monthly Category Transactions'
      'CashFlow Annual Annual Annual'
      `,
    gridArea: 'CardContainer',
    overFlowY: 'auto',
  };

  return (
    <Grid container sx={outerGridContainer}>
      {/* <InfoContext.Provider value={[userInfo, setUserInfo]}> */}
      <Box item sx={{ gridArea: 'Header', border: 1 }}>
        <Header />
        <SignIn  />
      </Box>
      <Grid container sx={innerGridContainer} />
      <Box sx={{ gridArea: 'main' }}>
      </Box>

      <Box item sx={{ gridArea: 'Footer' }}>
        <Footer />
      </Box>
      {/* </InfoContext.Provider> */}
    </Grid>
  );
}

export default MainContainer;
