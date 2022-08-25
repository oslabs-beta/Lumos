import React, { useState, useEffect, createContext, useContext } from "react";
import { Box, Paper } from "@mui/material";
import Login from "../components/Login.jsx";
import Sign from "../components/SignIn.jsx";
import Footer from "../components/Footer.jsx";

// lottie icons
import Lottie from "lottie-react";
import landingAnimation from "../assets/lotties/landing.json";

export default function LandingPage() {
  return (
    <>
      <Box container className="HeroContainer">
        <Box className="Hero">
          <h1>Welcome to Lumos</h1>
          <p>
            <h6>About Lumos</h6>
            Lumos is an open-source offering that provides a solution by merging
            analytics with polished UI integrations to improve end-users
            interaction with Lambda metrics <br />— resulting in a user-friendly
            experience.
          </p>
          <p>
            <ul className="HeroTechStack">
              <h6>Lumos Tech Stack</h6>
              <li>
                <a href="https://reactjs.org/">React</a> |{" "}
                <a href="https://material-ui.com">Material-Ui</a> |{" "}
                <a href="https://www.chartjs.org/">ChartJS</a>
              </li>
              <li>
                <a href="https://aws.amazon.com/lambda/">AWS Lambda</a> |{" "}
                <a href="https://aws.amazon.com/sdk-for-javascript/">SDK</a> |{" "}
                <a href="https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html">
                  AWS STS
                </a>{" "}
                |{" "}
                <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatch.html">
                  CloudWatch
                </a>{" "}
                |{" "}
                <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rds/classes/rds.html">
                  {" "}
                  RDS{" "}
                </a>
              </li>
              <li>
                <a href="https://nodejs.org/en/">Node</a> |{" "}
                <a href="https://expressjs.com">Express</a> |{" "}
                <a href="https://postgresql.org">PostgreSQL</a>
              </li>
              <li>
                <a href="https://webpack.js.org/">Webpack</a> |{" "}
                <a href="https://www.npmjs.com/package/bcryptjs">Bcrypt</a> |{" "}
                <a href="https://jwt.io/">JSON Web Token</a>
              </li>
            </ul>
          </p>
        </Box>
        <Lottie animationData={landingAnimation} loop={true} />
      </Box>
    </>
  );
}
