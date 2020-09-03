import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import logo from '../../../assets/img/pilgrimsLogo.png';
import routes from '../../../routes';
import styles from './styles';
import Drawer from '../drawer';
import mobileWidth from '../../../constants/mobileWidth';

const NavBar = () => {
  const classes = makeStyles(styles)();
  const history = useHistory();
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
              <Button
                color="inherit"
                key={route.name}
                onClick={() => history.push(route.path)}
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
