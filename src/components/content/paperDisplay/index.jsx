import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const PaperDisplay = ({ children }) => {
  const classes = makeStyles(styles)();

  return <Paper className={classes.paperBody}>{children}</Paper>;
};

PaperDisplay.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PaperDisplay;
