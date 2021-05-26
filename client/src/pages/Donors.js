import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  makeStyles,
  Grid,
  Container,
  Modal,
  TextField,
  Paper,
  Box,
} from "@material-ui/core";
import DonatorCard from "../components/DonatorCard";

const useStyles = makeStyles(() => ({
  root: {
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
  donationModal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  donationGrid: {
    padding: "1rem",
  },
  donationTitle: {
    padding: "1rem",
  },
  donationPaper: {
    width: "400px",
  },
}));

export default function Donors() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("Anonymous");
  const [donation, setDonation] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/donors/all"); // https://active-citizen-dehackathon.herokuapp.com/ prod base url ; http://localhost:8000/ dev base url
      const resData = await response.json();
      console.log(resData);
      setDonors(resData.data);
    })();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setSubmitted(false);
    setOpen(false);
  };

  const handleNameChange = e => setName(e.target.value);
  const handleDonationChange = e => setDonation(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, donation);
    const donationData = {
      name: name,
      amount: donation,
      date: new Date().toLocaleString("en-US", {
        timeZone: "America/New_York",
      }),
    };
    fetch("http://localhost:8000/api/donors/donation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donationData),
    })
      .then(response => response.json())
      .then(data => {
        setSubmitted(true);
        console.log("Success:", data);
      })
      .catch(error => {
        console.log("Error:", error);
      });
  };

  return (
    <Container className={classes.root}>
      <Grid container className={classes.titleBox}>
        <Container className={classes.pageTitle}>
          <Typography variant='h2' component='h1'>
            Every Donation Counts. Say hello to our Hall of Donors.
          </Typography>
        </Container>
        <Container className={classes.buttonBox}>
          <Button
            variant='contained'
            href='#'
            className={classes.buttonDonate}
            onClick={handleOpen}>
            {" "}
            Become a Donor{" "}
          </Button>
        </Container>
        <Modal
          open={open}
          onClose={handleClose}
          className={classes.donationModal}>
          {submitted ? (
            <Paper className={classes.donationPaper}>
              <Typography
                variant='h6'
                component='h6'
                className={classes.donationTitle}>
                Thanks for donating!
              </Typography>
            </Paper>
          ) : (
            <form onSubmit={handleSubmit}>
              <Paper className={classes.donationPaper}>
                <Typography
                  variant='h4'
                  component='h4'
                  className={classes.donationTitle}>
                  Your donation:
                </Typography>
                <Grid container spacing={3} className={classes.donationGrid}>
                  <Grid item xs={12}>
                    <TextField
                      id='outlined-basic'
                      label='Name'
                      variant='outlined'
                      type='text'
                      value={name}
                      onChange={handleNameChange}
                      inputProps={{ minLength: "2" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id='outlined-basic'
                      label='Donation Amount'
                      variant='outlined'
                      type='number'
                      value={donation}
                      onChange={handleDonationChange}
                      inputProps={{ min: "0", step: "0.10" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type='submit' className={classes.buttonDonate}>
                      Donate
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </form>
          )}
        </Modal>
      </Grid>
      <Box display='flex' flexWrap='wrap' p={1}>
        {donors
          ? donors.map(donor => (
              <Box p={3} className={classes.gridBox}>
                <DonatorCard
                  name={donor.name}
                  totalDonations={donor.totalDonations}
                  donationsCount={donor.donationsCount}
                />
              </Box>
            ))
          : " "}
      </Box>
    </Container>
  );
}
