import {
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Button,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  import React from "react";
  
  const useStyles = makeStyles(() => ({
    cardRoot: {
      display: "flex",
      flexDirection:"column",
      width:"250px",
      alignContent:"center"
    },
    cardMedia: {
      height:"250px",
      width:"250px"
    },
  }));
  
  export default function OrgCard(props) {
    const classes = useStyles();
  
    return (
      <Card variant='outlined' raised={true} className={classes.cardRoot}>
        <CardMedia className={classes.cardMedia} image={props.imageURL}/>
        <CardContent>
          <Typography variant="h5">{props.orgName}</Typography>
        </CardContent>
        <CardActions>
          <Button>
            Vote
          </Button>
        </CardActions>
      </Card>
    );
  }
  