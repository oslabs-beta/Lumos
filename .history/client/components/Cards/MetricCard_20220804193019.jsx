import React from "react";
import { Card, CardContent, Divider, Typography, CardHeader, Badge } from "@mui/material"



export default function MetricCard() {
  return (
    <Card container>
        <CardHeader sx={{maxwidth:10}}
          title={
            <Badge badgeContent="2" color='secondary'>
              Metrics
            </Badge>
          }
        />
        <CardContent>
          <Typography
            variant="subtitle"
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
