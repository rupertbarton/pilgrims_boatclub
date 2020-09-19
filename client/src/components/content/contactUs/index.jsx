import React from 'react';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import mobileWidth from '../../../constants/mobileWidth';
import styles from './styles';

const ContactUs = () => {
  const classes = makeStyles(styles)();
  const isMobile = useMediaQuery(`(max-width:${mobileWidth}px)`);

  return (
    <>
      <Typography variant="h4">Contact Us</Typography>

      <div className={classes.contactUsContainer}>
        <form className={classes.form} autoComplete="on">
          <div><TextField className={classes.inputField} fullWidth label="Name" variant="outlined" /></div>
          <div><TextField className={classes.inputField} fullWidth label="Email" variant="outlined" /></div>
          <div><TextField className={classes.inputField} fullWidth label="Phone" variant="outlined" /></div>
          <div><TextField className={classes.inputField} fullWidth label="Message" variant="outlined" multiline rows="20" /></div>
          <Button className={classes.submitButton} variant="contained" color="primary">Submit</Button>
        </form>
        {isMobile && <Divider />}
        <iframe
          title="map"
          className={classes.mapIframe}
          width="45%"
          height="100%"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=51.30127391983704,1.1304073130859251&amp;key=AIzaSyARNP6PBrYdKNmsYf09tU8jRnffQb-sFQg&amp;language=en"
          allowFullScreen=""
        />
      </div>
    </>
  );
};

export default ContactUs;
