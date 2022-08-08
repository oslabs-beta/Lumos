import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ApartmentSharpIcon from "@material-ui/icons/ApartmentSharp";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import { Box, Typography } from "@material-ui/core";
import ContactCard from "./ContactCard";

const useStyles = makeStyles((theme) => ({
  avatar: {
    fontSize:"25px !important"
  },
  white: {
    background: "#ffff"
  },
  blue: {
    background: "#0000ff"
  },
  red: {
    background: "#ff0000"
  }
}));

const interface = {
  variant: string,
  name: string,
  number: string;
}
