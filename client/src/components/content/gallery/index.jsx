import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Feed from 'react-instagram-authless-feed';

import styles from './styles';

const Gallery = () => {
  const classes = makeStyles(styles)();

  return (
    <>
      <Feed userName="kscbc1862" className={classes.feed} />
    </>
  );
};

export default Gallery;
