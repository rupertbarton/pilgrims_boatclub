import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../../assets/pilgrimsLogo.png';
import routes from '../../../routes';
import styles from './styles';
import Drawer from '../drawer';

const NavBar = () => {
  const classes = makeStyles(styles)();
  const history = useHistory();
  const isMobile = useMediaQuery('(max-width:600px)');

  const routeOnClick = (path) => {
    history.push(path);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        {isMobile ? (
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer mobileOpen={mobileOpen} toggleDrawer={handleDrawerToggle} />
          </Toolbar>
        ) : (
          <Toolbar disableGutters>
            <Button
              className={classes.logoButton}
              onClick={() => routeOnClick('/')}
            >
              <img className={classes.logo} src={logo} alt="Logo" />
            </Button>
            {routes.map((route) => (
              <Button
                color="inherit"
                key={route.name}
                onClick={() => routeOnClick(route.path)}
              >
                {route.name}
              </Button>
            ))}
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
};

export default NavBar;
