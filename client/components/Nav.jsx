/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import { Box } from "@mui/material";
import Login from "../components/Login.jsx";
import Sign from "../components/SignIn.jsx";
import Signout from "../components/Signout.jsx";
import { InfoContext } from "../containers/MainContainer.jsx";

function Nav() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
  return (
    <Box className="Nav">
      <Box className="Logo">
        <Box className="LumosLogoBox">
          <img
            className="LumosLogo"
            src={require("../assets/Lumos_Logo.png").default}
          />
        </Box>
      </Box>
      {/* <Box className="ButtonContainer">
        <Signout />
      </Box> */}
      {userInfo.loggedIn === false ? (
        <>
          <Box className="ButtonContainer">
            <Login />
            <Sign />
          </Box>
        </>
      ) : (
        <>
          <Box className="Logo">
            <Box className="LumosLogoBox">
              <h2>
                Welcome to Lumos {userInfo.first_name} {userInfo.last_name}
              </h2>
            </Box>
          </Box>
          <Box className="ButtonContainer">
            <Signout />
          </Box>
        </>
      )}
    </Box>
  );
}

export default Nav;
