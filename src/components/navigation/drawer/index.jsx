import React from 'react';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import logo from '../../../assets/pilgrimsLogo.png';
import styles from './styles';
import routes from '../../../routes';

const DrawerComponent = ({ mobileOpen, toggleDrawer }) => {
  const classes = makeStyles(styles)();
  const history = useHistory();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const drawerContent = () => (
    <div>
      <div className={classes.toolbar}>
        <Button
          className={classes.logoButton}
          onClick={() => history.push('/')}
        >
          <img className={classes.logo} src={logo} alt="Logo" />
        </Button>
      </div>
      <Divider />
      <List>
        {routes.map((route) => (
          <ListItem
            button
            key={route.name}
            onClick={() => { history.push(route.path); toggleDrawer(); }}
          >
            <ListItemText primary={route.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="Navigation drawer">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <SwipeableDrawer
          variant="temporary"
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
        >
          {drawerContent(true)}
        </SwipeableDrawer>
      </Hidden>
    </nav>
  );
};

DrawerComponent.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
};

export default DrawerComponent;
