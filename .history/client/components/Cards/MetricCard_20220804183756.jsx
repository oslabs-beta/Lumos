import React from "react";
import { Card, CardContent, Divider, Typography, CardHeader, Badge } from "@mui/material"



export default function MetricCard() {
  return (
    <Card sx={{maxWidth:'200px', maxHeight:'10px'}}>
        <CardHeader
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
