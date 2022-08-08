import React from "react";
import { Box, Card, CardContent, Divider, Typography, CardHeader, Badge } from "@mui/material"



export default function MetricCard() {
  return (
    <>
    <Box container className="Active-Functions">
        <div className="cardIcon"></div>
        <div className="cardPercentage"></div>
        <div className="cardStats"></div>
        <Divider light />
        <div className="cardTitle"></div>
    </Box>
    <Box container className="Total-Errors">
        <div className="cardIcon"></div>
        <div className="cardPercentage"></div>
        <div className="cardStats"></div>
        <Divider light />
        <div className="cardTitle"></div>
    </Box>
    <Box container className="Avg-Cost">
        <div className="cardIcon"></div>
        <div className="cardPercentage"></div>
        <div className="cardStats"></div>
        <Divider light />
        <div className="cardTitle"></div>
    </Box>
    <Box container className="Avg-Duration">
        <div className="cardIcon"></div>
        <div className="cardPercentage"></div>
        <div className="cardStats"></div>
        <Divider light />
        <div className="cardTitle"></div>
    </Box>
    </>
  );
}
