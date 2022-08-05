import React from "react";
import { Box, Card, CardContent, Divider, Typography, CardHeader, Badge } from "@mui/material"



export default function MetricCard() {
  return (
    <>
    <Box container className="Active-Functions"> {/* grid container spacing={1} align="center" style={{ width: "90%" }}>*/}
        <div className="cardIcon"></div> {/*grid item xs={{6}} */}
        <div className="cardPercentage"></div> {/*grid item xs={{6}} */}
        <div className="cardStats"></div> {/*grid item xs={{12}} */}
        <Divider light />
        <div className="cardTitle"></div> {/*grid item xs={{12}} */}
    </Box>
    <Box container className="Total-Errors"> {/* grid container spacing={1} align="center" style={{ width: "90%" }}>*/}
        <div className="cardIcon"></div> {/*grid item xs={{6}} */}
        <div className="cardPercentage"></div> {/*grid item xs={{6}} */}
        <div className="cardStats"></div> {/*grid item xs={{12}} */}
        <Divider light />
        <div className="cardTitle"></div> {/*grid item xs={{12}} */}
    </Box>
    <Box container className="Avg-Cost"> {/* grid container spacing={1} align="center" style={{ width: "90%" }}>*/}
        <div className="cardIcon"></div> {/*grid item xs={{6}} */}
        <div className="cardPercentage"></div> {/*grid item xs={{6}} */}
        <div className="cardStats"></div> {/*grid item xs={{12}} */}
        <Divider light />
        <div className="cardTitle"></div> {/*grid item xs={{12}} */}
    </Box>
    <Box container className="Avg-Duration"> {/* grid container spacing={1} align="center" style={{ width: "90%" }}>*/}
        <div className="cardIcon"></div> {/*grid item xs={{6}} */}
        <div className="cardPercentage"></div> {/*grid item xs={{6}} */}
        <div className="cardStats"></div> {/*grid item xs={{12}} */}
        <Divider light />
        <div className="cardTitle"></div> {/*grid item xs={{12}} */}
    </Box>
    </>
  );
}
