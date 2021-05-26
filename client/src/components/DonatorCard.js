import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    padding: "1.25rem 0 0",
    width: "250px",
    raised: "true",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    width: "250px",
    height: "250px",
  },
  content:{
    padding:"1rem 1.75rem 0"
  },
  titles: {
    alignContent: "center",
    fontSize:"1rem",
  },
}));

export default function DonatorCard(props) {
  const classes = useStyles();

  return (
    <Card variant='outlined' raised={true} className={classes.root}>
      <CardMedia
        className={classes.media}
        image='/assets/dollar.png'></CardMedia>
      <CardContent className={classes.content}>
        <Typography className={classes.titles} variant='h6' component='h2'>
          Name: {props.name}
        </Typography>
        <Typography className={classes.titles} variant='h6' component='h2'>
          Donated amount: ${props.totalDonations}
        </Typography>
        <Typography className={classes.titles} variant='h6' component='h2'>
          Num. of donations: {props.donationsCount}
        </Typography>
      </CardContent>
    </Card>
  );
}
