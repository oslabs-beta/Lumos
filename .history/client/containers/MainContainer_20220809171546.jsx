/* eslint-disable linebreak-style */
import React, {useState, useEffect, createContext} from 'react';
import {
  Grid, Box,
} from '@mui/material';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Nav from '../components/Nav.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Metrics from '../components/Metrics.jsx';
// import MetricCard from '../components/Cards/MetricCard.jsx';
import Usage from '../components/Usage.jsx';
import Charts from '../components/Charts.jsx';
import Errors from '../components/Errors.jsx';
// import Card from '@mui/material';
import '../assets/styles.css';
// import '../assets/outerContainer.css';

export const InfoContext = createContext();

function MainContainer() {
  // const [userInfo, setUserInfo] = useContext(InfoContext);

  const [userInfo, setUserInfo] = useState({
    loggedIn: false,
    avatar: "",
    user_name: "",
    first_name: "",
    user_id: "",
    lambdaMetrics: [], // { accountName: "", accountBalance: 0, accountType: "" }
  });
  // Metrics card
    //isLoggedIn: false;
    //totalInvocation
    //totalErrors
    //throttle
    //Duration
    //Invocation percentage
    //Error percentage
    //Invocation percentage
    //Duration percentage
  // Errors log
    // label
    // status
    // value
    // timestamp
  // Donut chart
    // all lambda functions
  // Line chart
    // all lambda functions

  return (
    //implement grid template outer container
    <Grid container className="outerContainer">
      <InfoContext.Provider value={[userInfo, setUserInfo]}>
      <Sidebar item />
      <Nav item />
      <Header item />
      <Metrics item/>
      <Usage item  />
      <Charts item />
      <Errors item />
      <Footer item />
      </InfoContext.Provider>
    </Grid>
  );
}

export default MainContainer;
