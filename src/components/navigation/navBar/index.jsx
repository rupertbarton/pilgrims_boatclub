import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory, useLocation } from 'react-router-dom';

import logo from '../../../assets/img/pilgrimsLogo.png';
import mobileWidth from '../../../constants/mobileWidth';
import routes from '../../../routes';
import Drawer from '../drawer';
import styles from './styles';

const NavBar = () => {
  const classes = makeStyles(styles)();
  const history = useHistory();
  const location = useLocation();
  const isMobile = useMediaQuery(`(max-width:${mobileWidth}px)`);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
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
            <Typography
              variant="h6"
              className={classes.title}
            >
              Canterbury Pilgrim&apos;s Boat Club
            </Typography>
            <Drawer mobileOpen={mobileOpen} toggleDrawer={handleDrawerToggle} />
          </Toolbar>

        ) : (

          <Toolbar disableGutters>
            <Button
              className={classes.logoButton}
              onClick={() => history.push('/')}
            >
              <img className={classes.logo} src={logo} alt="Logo" />
            </Button>

            {routes.map((route) => (
              <ListItem
                button
                selected={location.pathname === route.path}
                variant="contained"
                key={route.name}
                onClick={() => history.push(route.path)}
                className={classes.navigationButton}
              >
                {route.name}
              </ListItem>
            ))}

          </Toolbar>
        )}
      </AppBar>
    </div>
  );
};

export default NavBar;
