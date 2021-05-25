import React, { useState } from "react";
import {
  Typography,
  Button,
  makeStyles,
  Grid,
  Box,
  Container,
  Card,
  CardMedia,
  CardActions,
  CardContent
} from "@material-ui/core";
import OrgCard from "../components/OrgCard";

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
    flexDirection:"column",
    width:"250px"
  },
  cardMedia: {
    height:"250px",
    width:"250px"
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

export default function Members() {
  const classes = useStyles();
  
  const organizations=[
    {orgName:"Salvation Army", imageURL:"https://pixy.org/download/492313/"},
    {orgName:"Boston Cares", imageURL:"https://cdn0.handsonconnect.org/0005/images/BC_30th%20Anni%20Logo.png"},
    {orgName:"Center for Women and Enterprise", imageURL:"https://media-exp1.licdn.com/dms/image/C560BAQEFprfEA0l2og/company-logo_200_200/0/1613150034809?e=2159024400&v=beta&t=-UDCHjenE6FcFwRTLUwxEtczZM-5v8dO17vf6QkzkBY"},
    {orgName:"Youth Enrichment Services", imageURL:"https://yeskids.org/wp-content/uploads/logo-w-text.png"},
    {orgName:"Community Servings", imageURL:"https://samada.com/wp-content/uploads/2018/01/Community-Servings.jpg"},
    {orgName:"Cradles to Crayons", imageURL:"https://pbs.twimg.com/profile_images/649627114791022592/mdLalR3F_400x400.png"},
    {orgName:"Operation ABLE", imageURL:"https://operationable.net/uploads/2017/05/OperationABLELogo-logo-box.png"},
    {orgName:"Boston Living Center", imageURL:"data:image/png;base64,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"},
    {orgName:"Make-A-Wish Massachusetts and Rhode Island", imageURL:"https://scontent-bos3-1.xx.fbcdn.net/v/t1.18169-9/26733329_1773406689400688_2927655954571661668_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=fYqOGmyEaAkAX_NwVgL&_nc_ht=scontent-bos3-1.xx&oh=b9645249c88dfc0ea8352d27e7f7afc8&oe=60D35DBE"},
    {orgName:"Project Bread", imageURL:"https://pbs.twimg.com/profile_images/1309108868631408647/PpOm7Q0K.jpg"},

  ]

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
      <Box display='flex' flexWrap='wrap' p={1}>
      {organizations
          ? organizations.map(organizations => (
              <Box p={3} className={classes.gridBox}>
                <OrgCard
                  orgName={organizations.orgName}
                  imageURL={organizations.imageURL}
                />
              </Box>
            ))
          : " "}
      </Box>
    </Container>
  );
}
