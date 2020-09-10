import React from 'react';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link, useHistory } from 'react-router-dom';

import henley1991 from '../../../assets/img/henley1991.JPG';
import kscbcLogo from '../../../assets/img/kscbcLogo.png';
import kscLogo from '../../../assets/img/kscLogo.jfif';
import oksLogo from '../../../assets/img/oksLogo.jfif';
import agmAgenda from '../../../assets/pdf/agmAgenda21-09-2019.pdf';
import membershipForm from '../../../assets/pdf/membershipForm.pdf';
import standingOrderFormDouble from '../../../assets/pdf/standingOrderFormDouble.pdf';
import standingOrderFormSingle from '../../../assets/pdf/standingOrderFormSingle.pdf';
import trusteesAgenda from '../../../assets/pdf/trusteesAgenda21-09-2019.pdf';
import mobileWidth from '../../../constants/mobileWidth';
import styles from './styles';


const Home = () => {
  const classes = makeStyles(styles)();
  const history = useHistory();
  const isMobile = useMediaQuery(`(max-width:${mobileWidth}px)`);

  const mainImage = () => (
    <div className={classes.mainImageContainer}>
      <img
        className={classes.mainImage}
        src={henley1991}
        alt="Henley Royal Regatta Final, 1991"
      />
      <Typography component="span" className={classes.mainText} variant="body2" color="textSecondary">
        The King&apos;s School Canterbury racing in the final of the Princess Elizabeth Cup at
        Henlery in 1991. In reaching the final they won against ReadingBluecoat School, Tabor
        Academy U.S.A, Shrewsbury and Hampton before losing to Eton in the final.
      </Typography>
    </div>
  );

  return (
    <>
      <div>
        {isMobile || mainImage()}
        <Typography variant="h4">Welcome to Canterbury Pilgrims Boat Club</Typography>
        <Typography variant="body1">Canterbury Pilgrims Boat Club exists to support rowers and rowing, both past and present, at The King&apos;s School Canterbury.</Typography>
        <Typography variant="body1">CPBC also encourages its members to row and race, using either their own boats or its club fleet of boats.</Typography>
        <Typography variant="body1">
          To find out how you can join, get involved, help &amp; support please:
          {' '}
          <Link to="/contact-us">Contact us here.</Link>
        </Typography>
      </div>

      {isMobile && mainImage()}

      <Divider />

      <div>
        <Typography variant="h4">Announcements</Typography>
        <Typography variant="body1">The next Canterbury Pilgrims BC AGM will be held on Saturday 19th September, 2020 16:00.</Typography>
        <Typography variant="body1">Please find the below links in regards to the agenda:</Typography>
        <Typography variant="body1">
          <a href={trusteesAgenda} rel="noopener noreferrer" target="_blank">Trustee Agenda</a>
          {' & '}
          <a href={agmAgenda} rel="noopener noreferrer" target="_blank">AGM Agenda</a>
        </Typography>
        <Typography variant="body1">
          For Past Meeting Minutes please
          {' '}
          <Link to="/agm-and-trustee-meetings">click here</Link>
          .
        </Typography>
      </div>

      <Divider />

      <div>
        <Typography variant="h4">Pressure Group</Typography>
        <Typography variant="body1">
          To ensure the School&apos;s continued support of KSCBC
          in a way that allows it to grow and
          flourish, the Canterbury Pilgrims Boat Club has a
          continual dialogue with the School and
          its key people. Only with your support is it possible
          to ensure rowing remains an important and successful
          part of school life for years to come.
        </Typography>
        <Typography variant="body1">To become a member:.</Typography>
        <Typography variant="body1">
          <a href={membershipForm} rel="noopener noreferrer" target="_blank">Membership Form</a>
          {' '}
          &amp;
          {' '}
          <a href={standingOrderFormSingle} rel="noopener noreferrer" target="_blank">Standing Order Form (continual)</a>
          {' '}
          /
          {' '}
          <a href={standingOrderFormDouble} rel="noopener noreferrer" target="_blank">Standing Order Form (specified length)</a>
        </Typography>
      </div>

      <Divider />

      <div>
        <Typography variant="h4">Membership</Typography>

        <Typography variant="body1">To become a member:</Typography>
        <Typography variant="body1">
          <a href={membershipForm} rel="noopener noreferrer" target="_blank">Membership Form</a>
          {' '}
          &amp;
          {' '}
          <a href={standingOrderFormSingle} rel="noopener noreferrer" target="_blank">Standing Order Form (continual)</a>
          {' '}
          /
          {' '}
          <a href={standingOrderFormDouble} rel="noopener noreferrer" target="_blank">Standing Order Form (specified length)</a>
        </Typography>
      </div>

      <Divider />

      <div className={classes.centerText}>
        <Typography variant="h5">To Donate to Canterbury Pilgrims Boat Club:</Typography>
        <Button variant="contained" color="primary" href="https://cafdonate.cafonline.org/9193">Donate</Button>
      </div>

      <Divider />

      <div>
        <Typography variant="h4">Parents &amp; Supporters</Typography>
        <Typography variant="body1">King&apos;s School Canterbury Boat Club needs help and support from Parents of active rowing pupils. From helping to run the Pilgrims to simply turning up on the towpath at a Head or Regatta to cheer on the rowers your participation is greatly valued. If you haven&apos;t joined already please do and also consider offering your help to the club.</Typography>
        <div className={classes.centerText}>
          <Button variant="contained" color="primary" onClick={() => history.push('/contact-us')}>Join up here</Button>
        </div>
      </div>

      <Divider />

      <div className={classes.externalLinksContainer}>
        <div className={classes.externalLink}>
          <a href="http://www.kingsrowing.co.uk/" rel="noopener noreferrer" target="_blank">
            <img className={classes.logo} src={kscbcLogo} alt="KSCBC Logo" />
          </a>
        </div>
        <div className={classes.externalLink}>
          <a href="http://www.oks.org.uk/" rel="noopener noreferrer" target="_blank">
            <img className={classes.logo} src={oksLogo} alt="OKS Logo" />
          </a>
        </div>
        <div className={classes.externalLink}>
          <a href="http://www.kingsrowing.co.uk/results.php" rel="noopener noreferrer" target="_blank">
            <img className={classes.logo} src={kscLogo} alt="KSC Logo" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
