import React from "react";
import { Card, CardContent, Divider, Typography, CardHeader, Badge } from "@mui/material"



export default function MetricCard() {
  return (
    <Box container sx={{maxWidth:150, maxHeight:200}}>
        <CardHeader 
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
    </Box>
  );
}
