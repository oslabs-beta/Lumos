/* eslint-disable linebreak-style */
import React ,{useContext} from 'react';
import { Box } from '@mui/material';
import Login from '../components/Login.jsx';
import Sign from '../components/SignIn.jsx';
import { InfoContext } from "../containers/MainContainer.jsx";


function Nav() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
  return (
    <Box className="Nav">
      <Box className="Logo">
      <img src={"../assets/Lumos_Logo.png"} />
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
