import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/pilgrimsLogo.png';
import routes from '../../routes';
import styles from './styles';

const NavBar = () => {
  const classes = makeStyles(styles)();
  const history = useHistory();

  const routeOnClick = (path) => {
    history.push(path);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar disableGutters>
          <img className={classes.logo} src={logo} alt="Logo" />
          {routes.map((route) => (
            <Button color="inherit" key={route.name} onClick={() => routeOnClick(route.path)}>
              {route.name}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
