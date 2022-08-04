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
        <img src={logo} width="50px" height="96%"></img>
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
              <HighlightOffRoundedIcon
                onClick={() => setLoginAppear(false)}
                sx={{
                  color: "black",
                  cursor: "pointer",
                }}
              ></HighlightOffRoundedIcon>
            </Box>

            <Box>
              <Box>
                <img src={logo} width="100px" height="100px"></img>
              </Box>
              <Typography>WELCOME BACK</Typography>
              <Box>
                <TextField id="username" label="username" onChange={(e) => { setUsername(e.target.value) }} />
                <TextField id="password" type="password" label="password" onChange={(e) => { setPassword(e.target.value); }} />
                <Button onClick={() => { submitInformation()}}>
                  Login
                </Button>
                <Button onClick={() => { setRegisterAppear(false) }}>
                  <GoogleIcon></GoogleIcon>
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      )}
      {registerAppear && (
        <Modal
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              alignItems: "center",
              height: "70%",
              width: "70%",
              backgroundColor: "white",
              padding: "50px",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                height: "50px",
                width: "100%",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "flex-start",
              }}
            >
              <HighlightOffRoundedIcon
                onClick={() => setRegisterAppear(false)}
                sx={{
                  color: "black",
                  cursor: "pointer",
                }}
              ></HighlightOffRoundedIcon>
            </Box>

            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <img src={logo} width="100px" height="100px"></img>
              </Box>
              <Typography
                sx={{ color: "#2d2d2d", padding: "30px" }}
                id="welcome-text"
                variant="h6"
                component="h2"
              >
                SAVE MONEY WITH US
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "300px",
                  gap: "10px",
                }}
              >
                <TextField
                  id="username"
                  label="username"
                  sx={{
                    backgroundColor: "#fefefe",
                    borderRadius: "3px",
                    "&:hover": {
                      backgroundColor: "#ececec",
                    },
                  }}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                ></TextField>
                <TextField
                  id="password"
                  type="password"
                  label="password"
                  sx={{
                    backgroundColor: "#fefefe",
                    borderRadius: "3px",
                    "&:hover": {
                      backgroundColor: "#ececec",
                    },
                  }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></TextField>
                <Button
                  sx={{
                    backgroundColor: "#ffd94a",
                    borderRadius: "3px",
                    padding: "10px",
                  }}
                  onClick={() => {
                    setRegisterAppear(false);
                  }}
                >
                  REGISTER
                </Button>
                <a href="/auth/google">
                  <Button
                    sx={{
                      backgroundColor: "#ffd94a",
                      borderRadius: "3px",
                      padding: "10px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                    }}
                    onClick={() => {
                      setRegisterAppear(false);
                    }}
                  >
                    <GoogleIcon></GoogleIcon>
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
