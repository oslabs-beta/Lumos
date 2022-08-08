import React from "react";
import { Card, CardContent, Divider, Typography, CardHeader, Badge } from "@mui/material"



export default function MetricCard() {
  return (
    <Card sx={{Width:'25%', Height:'25%'}}>
        <CardHeader sx={{width: '25%', height:'25%'}}
          title={
            <Badge badgeContent="2" color='secondary'>
              Metrics
            </Badge>
          }
        />
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom='true'
          >
            {" "}
            This is your metric
          </Typography>
          <Divider light />
        </CardContent>
    </Card>
  );
}
