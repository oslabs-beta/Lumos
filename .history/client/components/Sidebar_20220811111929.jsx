/* eslint-disable linebreak-style */
import React from 'react';
import { Box, Button, Drawer, Typography} from '@mui/material';


function Sidebar() {
  
  return (
    <Box className="Sidebar">

        <div className="sidebarLambda">
          <div className="sidebarIcon sidebarMainIcon">
            <img src="https://i.ibb.co/w6Dvhn5/AWS-Lambda-Icon.png" />
          </div>
          <div className="sidebarIcon">
            Dashboard
          </div>
          <div className="sidebarIcon">
            Alerts
          </div>
          <div className="sidebarIcon">
            Logs
          </div>
        </div>
        <div className="sidebarEC2">
          <div className="sidebarIcon sidebarMainIcon">
            EC2
          </div>
          <div className="sidebarIcon">
            Dashboard
          </div>
          <div className="sidebarIcon">
            Alerts
          </div>
          <div className="sidebarIcon">
            Logs
          </div>
        </div>
    </Box>
  );
}

export default Sidebar;

{/* <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000"
preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
</g>
</svg> */}