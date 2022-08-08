/* eslint-disable linebreak-style */
import React from 'react';
import {
  Grid, Box,
} from '@mui/material';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SignIn from '../components/Signin.jsx';
import '../assets/styles.css';

function MainContainer() {

  const innerGridContainer = {
    // display: 'grid',
    // gridTemplateColumns: '1fr 1fr 1fr 1fr',
    // gridTemplateRows: '50% 50%',
    // gap: '20px',
    // height: '87vh',
    // padding: '20px',
    // gridTemplateAreas: ` 
    //   'Profile Monthly Category Transactions'
    //   'CashFlow Annual Annual Annual'
    //   `,
    // gridArea: 'CardContainer',
    // overFlowY: 'auto',
  };

  return (
    <Grid container className="outerContainer">
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
