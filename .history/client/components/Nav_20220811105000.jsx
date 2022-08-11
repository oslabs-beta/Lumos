/* eslint-disable linebreak-style */
import React ,{useContext} from 'react';
import { Box } from '@mui/material';
import Login from '../components/Login.jsx';
import Sign from '../components/SignIn.jsx';
import { InfoContext } from "../containers/MainContainer.jsx";
// import Logo from '../assets/Lumos_Logo.png'


function Nav() {
  // const logo = require('../assets/Lumos_Logo.png')
  const [userInfo, setUserInfo] = useContext(InfoContext);
  return (
    <Box className="Nav">
      <Box className="Logo">
      <img src={require('../assets/Lumos_Logo.png')} />
      </Box>
      {/* { userInfo.loggedIn === false &&
        <> */}
      <Box className="ButtonContainer">
      <Login />
      <Sign />
      </Box>
      {/* </>
      } */}
    </Box>
  );
}

export default Nav;
