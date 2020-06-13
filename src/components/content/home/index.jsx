import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from '../contentStyles';

const Home = () => {
  /* eslint-disable-next-line */
  const classes = makeStyles(styles)();

  return (
    <>
      <Typography variant="h4">Welcome to Canterbury Pilgrims Boat Club</Typography>
      <Typography variant="body1">Welcome to Canterbury Pilgrims Boat Club</Typography>
    </>
  );
};

export default Home;
