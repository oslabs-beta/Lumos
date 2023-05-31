/* eslint-disable linebreak-style */
import React from "react";
import { Box, Button, Drawer, Typography } from "@mui/material";

// sidebar buttons
import DayButton from "./dayButton.jsx";
import WeekButton from "./weekButton.jsx";
import MonthButton from "./monthButton.jsx";

// lottie icons
import Lottie from "lottie-react";
import dashboardIcon from "../assets/lotties/dashboardIcon.json";
import alertIcon from "../assets/lotties/alertIcon.json";
import logsIcon from "../assets/lotties/logsIcon.json";

function Sidebar() {
  return (
    <Box className="Sidebar">
      <div className="sidebarLambda">
        <div className="sidebarIcon sidebarMainIcon">
          <img src="https://i.ibb.co/w6Dvhn5/AWS-Lambda-Icon.png" />
        </div>
        <div className="SideBarButtonContainer">
          <DayButton />
          <WeekButton />
          <MonthButton />
        </div>
      </div>
    </Box>
  );
}

export default Sidebar;
