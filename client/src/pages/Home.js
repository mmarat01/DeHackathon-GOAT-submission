import React from "react";
import {
  Typography,
  Button,
  makeStyles,
  Container,
  Grid,
  Paper,
} from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {  
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop:"1.4rem",
    height:"100vh",
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
  paperTitle:{
    display:"flex",
    flexDirection:"column",
    padding:"1rem",
    alignItems:"center",
    background:"#EFEFEF"
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
    borderRadius: "1.5rem",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.5rem",
    textShadow: "2px 2px #000",
    boxShadow: "2px 2px #000",
    "&:hover": {
      backgroundColor: "#7fb2c9",
      textShadow: "none",
    },
  },
  buttonDonate: {
    backgroundColor: "#ff6961",
    borderRadius: "1.5rem",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.5rem",
    textShadow: "2px 2px #000",
    boxShadow: "2px 2px #000",
    "&:hover": {
      backgroundColor: "#e6463e",
      textShadow: "none",
    },
  },
  orText: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    color:"#fff"
  },
}));

//hands together Photo by Dio Hasbi Saniskoro from Pexels

export default function Home() {
  const classes = useStyles();
  return (
      <Grid container className={classes.root}>
        <Grid container className={classes.header}>
          <Container className={classes.pageTitle}>
            <Paper variant="outlined" className={classes.paperTitle}>
              <Typography variant='h2' component='h1'>
                Join Our Mission
              </Typography>
              <Typography variant='h4'>
                Help spread wealth and resources to underrepresented groups.
              </Typography>
            </Paper>
          </Container>
          <Container className={classes.buttonBox}>
            <Button
              variant='contained'
              component={Link}
              to='/members'
              className={classes.buttonVote}>
              {" "}
              Vote{" "}
            </Button>
            <Typography className={classes.orText}>
              &nbsp;&nbsp;or&nbsp;&nbsp;{" "}
            </Typography>
            <Button
              variant='contained'
              component={Link}
              to='/donors'
              className={classes.buttonDonate}>
              {" "}
              Donate{" "}
            </Button>
          </Container>
        </Grid>
      </Grid>
  );
}
