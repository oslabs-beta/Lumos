import React from "react";
import { Card, CardMedia, CardContent, Divider, Typography, CardHeader, Badge } from "@mui/material"

// 
const date = new Date(Date.now());
function MetricCard(classes) {
  return (
    <div className='metCard'>
      <Card className={classes.card}>
        <CardHeader
          title={
            <Badge badgeContent={"2"} color='secondary'>
              Metrics
            </Badge>
          }
          subheader={date}
        />
        <CardMedia
          className={classes.media}
          // image={

          // }
        />
        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            {" "}
            This is your metric
          </Typography>
          <Divider className={classes.divider} light />
        </CardContent>
      </Card>
    </div>
  );
}

export default MetricCard;
