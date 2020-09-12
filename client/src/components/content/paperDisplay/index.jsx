import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import styles from './styles';

const PaperDisplay = ({ children }) => {
  const classes = makeStyles(styles)();

  return (
    <div className={classes.paperContainer}>
      <Paper
        className={classes.paperBody}
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
