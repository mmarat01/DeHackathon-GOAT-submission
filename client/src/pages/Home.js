import React from "react";
import {
  Typography,
  Button,
  makeStyles,
  Container,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pageTitle: {
    flex: "1",
    marginBottom: "2rem",
    paddingRight: "1rem",
  },
  buttonBox: {
    flex: "1",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonVote: {
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
  buttonDonate: {
    backgroundColor: "#ff6961",
    borderRadius: "25px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "24px",
    textShadow: "2px 2px #000",
    boxShadow: "2px 2px #000",
    "&:hover": {
      backgroundColor: "#e6463e",
      textShadow: "none",
    },
  },
  orText: {
    fontWeight: "bold",
    fontSize: "24px",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid container className={classes.header}>
        <Container className={classes.pageTitle}>
          <Typography variant='h3' component='h1'>
            Join Our Mission, help spread wealth and resources to
            underrepresented groups.
          </Typography>
        </Container>
        <Container className={classes.buttonBox}>
          <Button
            variant='contained'
            href='/members'
            className={classes.buttonVote}>
            {" "}
            Vote{" "}
          </Button>
          <Typography className={classes.orText}>
            &nbsp;&nbsp;or&nbsp;&nbsp;{" "}
          </Typography>
          <Button
            variant='contained'
            href='/donors'
            className={classes.buttonDonate}>
            {" "}
            Donate{" "}
          </Button>
        </Container>
      </Grid>
    </Grid>
  );
}
