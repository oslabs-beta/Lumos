import React, { useState, useEffect, useContext } from "react";
import logo from "../assets/v_logo.png";
import {
  AppBar,
  Box,
  Button,
  Modal,
  Typography,
  TextField,
} from "@mui/material";
import { InfoContext } from "../containers/MainContainer.jsx";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import GoogleIcon from "@mui/icons-material/Google";

const Header = (props) => {
  // boolean value to show modal login and modal register
  const [loginAppear, setLoginAppear] = useState(false);
  const [registerAppear, setRegisterAppear] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useContext(InfoContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submitInformation() {
    let result = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((response) => response.text());
    result = JSON.parse(result);
    setUserInfo({
      loggedIn: true,
      avatar: result.avatar,
      user_name: result.username,
      accounts: [],
      transactions: result.transactionArray,
      categories: result.categories,
      allSum: result.allSum,
      incomeArray: result.incomeArray,
      totalIncome: result.totalIncome,
      savingsGoal: [],
    });
    setLoginAppear(false);
    setUserLoggedIn(true);
  }

  function signout() {
    setUserLoggedIn(false);
    setUserInfo({
      loggedIn: false,
      avatar: "",
      user_name: "",
      accounts: [], // { accountName: "", accountBalance: 0, accountType: "" }
      transactions: [], // { transactionName: "", transactionAmount: 0, transactionDate: "" }
      categories: [], // { categoryName: ''}
      allSum: 0,
      incomeArray: [],
      totalIncome: 0,
    });
  }

  return (
    <AppBar>
      <Box>
        <img src={logo} />
      </Box>

      <Box>
        {!userLoggedIn && (
          <Button variant="contained" onClick={() => { setLoginAppear(true) }}>
            LOGIN
          </Button>
        )}

        {!userLoggedIn && (
          <Button variant="contained" onClick={() => {setRegisterAppear(true)}}>
            REGISTER
          </Button>
        )}

        {userLoggedIn && (
          <Button variant="contained" onClick={() => {signout()}}>
            SIGN OUT
          </Button>
        )}
      </Box>

      {/* Modal */}
      {loginAppear && (
        <Modal open={open} >
          <Box>
            <Box>
              <HighlightOffRoundedIcon onClick={() => setLoginAppear(false)} />
            </Box>
            <Box>
              <Box>
                <img src={logo} />
              </Box>
              <Typography>WELCOME BACK</Typography>
              <Box>
                <TextField id="username" label="username" onChange={(e) => { setUsername(e.target.value) }} />
                <TextField id="password" type="password" label="password" onChange={(e) => { setPassword(e.target.value); }} />
                <Button onClick={() => { submitInformation()}}>
                  Login
                </Button>
                <Button onClick={() => { setRegisterAppear(false) }}>
                  <GoogleIcon />
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      )}
      {registerAppear && (
        <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box>
            <Box>
              <HighlightOffRoundedIcon onClick={() => setRegisterAppear(false)} />
            </Box>

            <Box>
              <Box>
                <img src={logo} />
              </Box>
              <Typography>
                SAVE MONEY WITH US
              </Typography>
              <Box>
                <TextField id="username" label="username" onChange={(e) => { setUsername(e.target.value) }} />
                <TextField id="password" type="password" label="password" onChange={(e) => { setPassword(e.target.value) }} />
                <Button onClick={() => { setRegisterAppear(false) }}>
                  REGISTER
                </Button>
                <a href="/auth/google">
                  <Button onClick={() => { setRegisterAppear(false) }} >
                    <GoogleIcon />
                  </Button>
                </a>
              </Box>
            </Box>
          </Box>
        </Modal>
      )}
    </AppBar>
  );
};

export default Header;
