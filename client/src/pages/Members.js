import React, { useState } from "react";
import {
  Typography,
  Button,
  makeStyles,
  Grid,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    // margin:"25px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "no-wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleBox: {
    //Photo by <a href="https://unsplash.com/@omarlopez1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Omar Lopez</a> on <a href="https://unsplash.com/s/photos/community?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    backgroundImage: "url(/assets/donators_img.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flexDirection: "column",
    flexGrow: 1,
    width: "100%",
  },
  cardRoot: {
    display: "flex",
  },
  cardMedia: {
    maxWidth: "100%",
  },
  pageTitle: {
    flex: "1",
    marginBottom: "2rem",
  },
  buttonBox: {
    flex: "1",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",
  },
  buttonDonate: {
    backgroundColor: "#abd7eb",
    borderRadius: "25px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "24px",
    textShadow: "2px 2px #000",
    boxShadow: "2px 2px #000",
    "&:hover": {
      backgroundColor: "#7fb2c9",
      textShadow: "none",
    },
  },
  gridBox: {
    marginTop: "25px",
    direction: "row",
    justifyContent: "space-around",
  },
}));

export default function Donors() {
  const classes = useStyles();
  const [name, setName] = useState();

  return (
    <Container className={classes.root}>
      <Grid container xs={12} className={classes.titleBox}>
        <Container className={classes.pageTitle}>
          <Typography variant='h2' component='h1'>
            Become a member, Start voting.
          </Typography>
        </Container>
        <Container className={classes.buttonBox}>
          <Button variant='contained' href='#' className={classes.buttonDonate}>
            Sign Up
          </Button>
        </Container>
      </Grid>
    </Container>
  );
}
