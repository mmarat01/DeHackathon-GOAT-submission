import React from "react";
import { makeStyles, Box, Typography, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: "25px",
    marginRight: "25px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop:"1.4rem",
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
  },
  gtRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  graphsBox: {
    flex: "1",
  },
  tablesBox: {
    flex: "1",
  },
  dataRow: {
    flex: "1",
    justifyContent: "center",
  },
}));

export default function Data() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Typography variant='h2' component='h1'>
          View Donations from a <br />
          statistical perspective.
        </Typography>
      </Box>
      <Grid container className={classes.gridBox}>
        <Grid container item className={classes.gtRow}>
          <Grid item className={classes.graphsBox}>
            <Paper>
              <Typography>Graphs</Typography>
            </Paper>
          </Grid>
          <Grid item className={classes.tablesBox}>
            <Paper>
              <Typography>Tables</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container item className={classes.dataRow}>
          <Paper>
            <Typography>Data trends</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
