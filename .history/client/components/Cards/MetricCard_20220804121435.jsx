import React from "react";
import { Card, CardMedia, CardContent, Divider, Typography, CardHeader, Badge } from "@mui/material"

const date = new Date(Date.now());

export default function MetricCard() {
  return (
    <Card>
        <CardHeader
          title={
            <Badge badgeContent={"2"} color='secondary'>
              Metrics
            </Badge>
          }
          subheader={date}
        />
        <CardContent>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            {" "}
            This is your metric
          </Typography>
          <Divider light />
        </CardContent>
    </Card>
  );
}
