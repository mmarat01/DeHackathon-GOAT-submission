import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  ListItem,
  ListItemText,
  ListItemIcon,
  List,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import DataUsageIcon from "@material-ui/icons/DataUsage";

// reference: https://betterprogramming.pub/making-a-basic-header-responsive-with-materialui-and-react-2198fac923c8

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#FFFFFF",
    marginBottom: "20px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-after",
  },
  logo: {
    // fontFamily:"Itim",
    fontSize: "900",
    fontWeight: "600",
    color: "#000000",
    textAlign: "left",
    marginRight: "100px",
  },
  menu_buttons: {
    fontWeight: 700,
    size: "18px",
    marginLeft: "50px",
  },
}));

export default function NavBar() {
  const [state, setState] = useState({ mobileView: false, drawerOpen: false });
  const { mobileView, drawerOpen } = state;
  const classes = useStyles();

  const drawerItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Donors", icon: <PeopleIcon />, path: "/donors" },
    { text: "Members", icon: <EmojiPeopleIcon />, path: "/members" },
    {
      text: "Data",
      icon: <DataUsageIcon />,
      path: "/data",
    },
  ];

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState(prevState => ({ ...prevState, mobileView: true }))
        : setState(prevState => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' component='h1' className={classes.logo}>
          {" "}
          ActiveCitizen
        </Typography>
        <div className={classes.buttonBar}>
          <Button component={Link} to='/' className={classes.menu_buttons}>
            Home
          </Button>
          <Button
            component={Link}
            to='/donors'
            className={classes.menu_buttons}>
            Donors
          </Button>
          <Button
            component={Link}
            to='/members'
            className={classes.menu_buttons}>
            Members
          </Button>
          <Button component={Link} to='/data' className={classes.menu_buttons}>
            Data
          </Button>
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState(prevState => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState(prevState => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar className={classes.toolbar}>
        <IconButton {...{ onClick: handleDrawerOpen }}>
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{ anchor: "left", open: drawerOpen, onClose: handleDrawerClose }}>
          <List>
            {drawerItems.map((item, index) => {
              const { text, icon, path } = item;
              return (
                <ListItem button component={Link} to={path} key={text}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
          </List>
        </Drawer>
        <Typography variant='h6' component='h1' className={classes.logo}>
          ActiveCitizen
        </Typography>
      </Toolbar>
    );
  };

  return (
    <div>
      <AppBar position='static' className={classes.root}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </div>
  );
}
