/* eslint-disable linebreak-style */
import React from 'react';
import {
  Grid, Box,
} from '@mui/material';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Sign from '../components/Signin.jsx';
import '../assets/styles.css';
// import '../assets/outerContainer.css';

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
    //implement grid template outer container
    <Grid container className="outerContainer">
      {/* <InfoContext.Provider value={[userInfo, setUserInfo]}> */}
      <Box item className="Sidebar" />
      <Box item className="Nav">
        {/* <Sign  /> */}
      </Box>
      <Header item className="Header"/>
      <Box item className="Metrics"/>
      <Box item className="Usage" />
      <Box item className="Charts"/>
      <Box item className="Errors" />
      {/* <Box item className="Footer" /> */}
      {/* <Box item className="Footer" > */}
      <Footer item />
      {/* </InfoContext.Provider> */}
    </Grid>
  );
}

export default MainContainer;
