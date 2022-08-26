/* eslint-disable linebreak-style */
import React from "react";
import { Box } from "@mui/material";

function Footer() {
  return (
    <Box className="Footer">
      <div className="footer-inner-container">
        <div className="footer-left">
          <a href="https://github.com/oslabs-beta/AWS-Lambda-Visualizer">
            Github
          </a>{" "}
          | <a href="https://www.linkedin.com/company/lumos-tools">LinkedIn</a>{" "}
          | <a href="https://medium.com/">Medium</a>
        </div>
        <div className="footer-middle">
          Accelerated by <a href="https://opensourcelabs.io/">OS Labs</a> as an
          open-source project.
        </div>
        <div className="footer-right">2022 © Lumos Tools</div>
      </div>
    </Box>
  );
}

export default Footer;
