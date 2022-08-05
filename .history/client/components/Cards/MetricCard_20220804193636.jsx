import React from "react";
import { Box, Card, CardContent, Divider, Typography, CardHeader, Badge } from "@mui/material"



export default function MetricCard() {
  return (
    <Box container >
        <CardHeader 
          title={
            <Badge badgeContent="2" color='secondary'>
              Metrics
            </Badge>
          }
        />
        
          <Typography
            variant="subtitle"
            gutterBottom='true'
            
          >
            {" "}
            This is your metric
          </Typography>
          <Divider light />
        
    </Box>
  );
}
