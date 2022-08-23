/* eslint-disable linebreak-style */
import React, { useState, useEffect, createContext, useContext } from "react";
import { Grid, Box } from "@mui/material";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Nav from "../components/Nav.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Metrics from "../components/Metrics.jsx";
// import MetricCard from '../components/Cards/MetricCard.jsx';
import Usage from "../components/Usage.jsx";
import Charts from "../components/Charts.jsx";
import Errors from "../components/Errors.jsx";
// import Card from '@mui/material';
import "../assets/styles.css";
// import '../assets/outerContainer.css';

import TestChart from "../components/charts/TestChart.jsx";

export const InfoContext = createContext();

function MainContainer() {
  // const [userInfo, setUserInfo] = useContext(InfoContext);

  const [userInfo, setUserInfo] = useState({
    loggedIn: false,
    user_name: "",
    first_name: "",
    user_id: "",
    timePeriod: "",
    lambdaFuncs: [
      {
        funcName: "",
        totalInvocations: 0,
        totalErrors: 0,
        timeStamps: [],
        funcValues: [],
        invocationsArray: [],
        formattedTimeStamps: [],
      },
    ],
    lambdaActiveInvocations: 0,
    lambdaTotalErrors: 0,
    lambdaAvgThrottle: 0,
    lambdaAvgDuration: 0,
    lambdaTotalCost: 0,
  });


  useEffect(() => console.log(''), [userInfo]);

  return (
    //implement grid template outer container

    <Grid container className="outerContainer">
      <InfoContext.Provider value={[userInfo, setUserInfo]}>
        <Nav item />
        {/* {userInfo.loggedIn === true && (
          <> */}
        <Sidebar item />
        <Header item />
        <Metrics item />
        <Usage item />
        <TestChart item />
        {/* <Charts item /> */}
        <Errors item />
        <Footer item />
        {/* </> */}
      </InfoContext.Provider>
    </Grid>
  );
}

export default MainContainer;
