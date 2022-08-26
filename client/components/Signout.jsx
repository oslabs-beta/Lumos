import React, { useState, setOpen, useContext, useEffect } from "react";
import { Button, TextField, Modal } from "@mui/material";
import { InfoContext } from "../containers/MainContainer.jsx";

export default function Signout() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
  const [metrics, setMetrics] = useState([]);

  //register user state
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  //register user handle change event

  // onclick event make a post request for login
  const submitHandler = () => {
    setData({
      email: "",
      password: "",
    });
    localStorage.clear();
    window.location.reload();
  };
  return (
    <Button
      id="signOut"
      className="LumosButton loginButton"
      onClick={submitHandler}
    >
      Signout
    </Button>
  );
}
