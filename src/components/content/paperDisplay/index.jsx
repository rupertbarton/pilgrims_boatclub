import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import styles from './styles';
import mobileWidth from '../../../constants/mobileWidth';

const PaperDisplay = ({ children }) => {
  const classes = makeStyles(styles)();
  const isMobile = useMediaQuery(`(max-width:${mobileWidth}px)`);

  return (
    <div className={isMobile ? classes.paperContainerMobile : classes.paperContainer}>
      <Paper
        className={isMobile ? classes.paperBodyMobile : classes.paperBody}
      >
        {children}
      </Paper>
    </div>
  );
};

PaperDisplay.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PaperDisplay;
