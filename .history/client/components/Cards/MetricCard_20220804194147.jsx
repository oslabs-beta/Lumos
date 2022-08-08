import React from "react";
import { Box, Card, CardContent, Divider, Typography, CardHeader, Badge } from "@mui/material"



export default function MetricCard() {
  return (
    <Box container className="metricCard">
        <div className="cardIcon"></div>
        <div className="cardPercentage"></div>
        <div className="cardStats"></div>
        <Divider light />
        <div className="cardTitle"></div>
          {/* <Typography
            variant="subtitle"
            gutterBottom='true'
          >
            This is your metric
          </Typography> */}
    </Box>
  );
}
