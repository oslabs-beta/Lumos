import React from "react";
import { Card, CardMedia, CardContent, Divider, Typography, CardHeader, Badge, withStyles } from "@mui/material"
// import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import Divider from "@material-ui/core/Divider";
// import Typography from "@material-ui/core/Typography";
// import CardHeader from "@material-ui/core/CardHeader";
// import Badge from "@material-ui/core/Badge";
// import { withStyles } from "@mui/material";

const styles = (muiBaseTheme) => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    paddingTop: "56.25%",
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3,
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit,
    },
  },
});
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
const wrapped = withStyles(styles)(MetricCard)
export default MetricCard;
