import React, { useState, useEffect, createContext, useContext } from "react";
import { Box, Paper } from "@mui/material";
import Login from "../components/Login.jsx";
import Sign from "../components/SignIn.jsx";
import Footer from "../components/Footer.jsx";

// lottie icons
import Lottie from "lottie-react";
import landingAnimation from "../assets/lotties/landing.json";

export default function LandingPage() {
  /*
  <!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="" width="600px" align="center" alt="Lumos Logo" >
    <h1>Lumos Lambda Metrics Visualizer</h1>
</div>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-lumos">About Lumos</a></li> 
    <li><a href="#technologies-used">Techologies Used</a></li>      
    <li><a href="#getting-started">Getting Started</a></li>      
    <li><a href="#key-lambda-metrics">Key Lambda Metrics</a></li>   
    <li><a href="#how-to-contribute">How to Contribute</a></li>     
    <li><a href="#license">License</a></li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>

<!-- ABOUT -->

## About Lumos

ABOUT LUMOS

## Technologies Used

- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com)
- [Chart.js](https://www.chartjs.org/)
- [AWS Lambda](https://aws.amazon.com/lambda/)
- [AWS SDK](https://aws.amazon.com/sdk-for-javascript/)
- [AWS STS](https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com)
- [PostgreSQL](https://postgresql.org)

<!-- GETTING STARTED -->

## Getting Started

Lumos requires access keys to sign programmatic requests to the AWS SDK. It is best practice to create an IAM user with permanent long-term credentials to interact with AWS services directly.

<ol>
  <li>In your AWS console, create an new IAM user. Make sure to check off "Access key - Programmatic access" when selecting an AWS credential type. Save these keys to your local machine. They cannot be retrieved after you've completed your IAM setup! </li>
  <li></li>
</ol>

<!-- EXPLAINING KEY LAMBDA METRICS FOCUSED ON -->

  
  */
  return (
    <>
      <Box container className="HeroContainer">
        <Box className="Hero">
          <h1>Welcome to Lumos</h1>
          <p>
            <h6>About Lumos</h6>
            Lumos is an aws Lambda function monitoring tool that breaks down
            functions into visual graphs and tallys up active invocations, total
            errors, total cost, average duration of invocations.{" "}
          </p>
          <p>
            <ul>
              <h6>Lumos Tech Stack</h6>
              <li>
                <a href="https://reactjs.org/">React</a>
              </li>
              <li>
                <a href="https://material-ui.com">Material-Ui</a>
              </li>
              <li>
                <a href="https://www.chartjs.org/">ChartJS</a>
              </li>
              <li>
                <a href="https://aws.amazon.com/lambda/">AWS Lambda</a>
              </li>
              <li>
                <a href="https://aws.amazon.com/sdk-for-javascript/">AWS SDK</a>
              </li>
              <li>
                <a href="https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html">
                  AWS STS
                </a>
              </li>
              <li>
                <a href="https://nodejs.org/en/">Node</a>
              </li>
              <li>
                <a href="https://expressjs.com">Express</a>
              </li>
              <li>
                <a href="https://postgresql.org">PostgreSQL</a>
              </li>
            </ul>
          </p>
        </Box>
        <Lottie animationData={landingAnimation} loop={true} />
      </Box>
    </>
  );
}
