import React from 'react';

import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import kscbcLogo from '../../../assets/img/kscbcLogo.png';
import oksLogo from '../../../assets/img/oksLogo.jfif';
import { kscbcUrl, oksUrl } from '../../../constants/externalUrls';
import mobileWidth from '../../../constants/mobileWidth';
import styles from './styles';


const KingsSchoolAndOks = () => {
  const classes = makeStyles(styles)();
  const isMobile = useMediaQuery(`(max-width:${mobileWidth}px)`);

  return (
    <>
      <div>

        <Typography variant="h4">External Links to King&apos;s School and OKS</Typography>
      </div>

      <div className={classes.externalLinksContainer}>
        <div className={classes.externalLink}>
          <Typography variant="body1">
            The King&apos;s School Canterbury can be visited
            {' '}
            <a href={kscbcUrl} rel="noopener noreferrer" target="_blank">here</a>
            .
          </Typography>
          <a href={kscbcUrl} rel="noopener noreferrer" target="_blank">
            <img className={classes.logo} src={kscbcLogo} alt="KSCBC Logo" />
          </a>
        </div>
        {isMobile && <Divider />}
        <div className={classes.externalLink}>
          <Typography variant="body1">
            Catch up with Old King&apos;s Scholars - non rowing info
            {' '}
            <a href={kscbcUrl} rel="noopener noreferrer" target="_blank">here</a>
            .
          </Typography>
          <a href={oksUrl} rel="noopener noreferrer" target="_blank">
            <img className={classes.logo} src={oksLogo} alt="OKS Logo" />
          </a>
        </div>
      </div>
    </>
  );
};

export default KingsSchoolAndOks;
