import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import logo from "../../assets/pilgrimsLogo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    height: "64px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: "100%",
    width: "auto",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar disableGutters={true}>
          <img className={classes.logo} src={logo} alt="Logo" />
          <Button color="inherit">Home</Button>
          <Button color="inherit">KSCBC</Button>
          <Button color="inherit">News</Button>
          <Button color="inherit">Pilgrims Offcuts</Button>
          <Button color="inherit">Gallery</Button>
          <Button color="inherit">King's School &amp; OKS</Button>
          <Button color="inherit">AGM &amp; Trustee Meetings</Button>
          <Button color="inherit">Club Page</Button>
          <Button color="inherit">Contact Us</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
