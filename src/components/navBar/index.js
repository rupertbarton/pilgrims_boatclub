import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import logo from "../../assets/pilgrimsLogo.png";
import routes from "../../routes";
import { useHistory } from "react-router-dom";

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
  let history = useHistory();

  const routeOnClick = (path) => {
    history.push(path)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar disableGutters={true}>
          <img className={classes.logo} src={logo} alt="Logo" />
          {routes.map((route) => (
              <Button color="inherit" onClick={() => routeOnClick(route.path)}> {route.name} </Button>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
