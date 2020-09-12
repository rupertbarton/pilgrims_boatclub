import React from 'react';

import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import kscbcLogo from '../../../assets/img/kscbcLogo.png';
import { kscbcUrl } from '../../../constants/externalUrls';
import styles from './styles';


const Home = () => {
  const classes = makeStyles(styles)();

  const mainImage = () => (
    <a href={kscbcUrl} rel="noopener noreferrer" target="_blank">
      <img
        className={classes.mainImage}
        src={kscbcLogo}
        alt="KSCBC Logo"
      />
    </a>
  );

  return (
    <>
      <div>
        {mainImage()}
        <Typography variant="h4">The King&apos;s School Canterbury Boat Club</Typography>
        <Typography variant="body1">
          King&apos;s School Canterbury Boat Club, established in 1862, is
          based at Westbere Lakes in Sturry about 3 miles from The School. The Club also has a
          boathouse at Plucks Gutter on the River Stour.
        </Typography>
        <Typography variant="body1">
          A consistent championship VIIIs school club it has seen many
          successes especially during the 1960s to 1980s and early 1990s. It holds the infamous
          record of the school with the most Henley finals but never won.
        </Typography>
        <Typography variant="body1">
          Pupils from the Kings school have represented Great Britain at
          Junior level and gone onto World Championship and Olympic Games level.
        </Typography>
        <Typography variant="body1">Junior Kings School also row out of the Westbere Boathouse.</Typography>
        <Typography variant="body1">
          You can visit KSCBC
          {' '}
          <a href={kscbcUrl}>here</a>
          .
        </Typography>
      </div>

      <Divider />

      <div>
        <Typography variant="h4">The King&apos;s School Canterbury Boat Club</Typography>
        <Typography variant="body1">
          The Pilgrims host a lunch party at Henley in support of the competing KSCBC 1st VIII. It
          is always a popular event and we hope this will continue to be a convivial meeting for
          Pilgrims, Parents and pupils alike and of course their friends. With the resurgence of
          rowing at King&apos;s this will be an enjoyable occasion for many years to come. Make a
          note of the event on Henley Saturday. The marquee is pitched at Henley Cricket Club, close
          to the Stewards enclosure.
        </Typography>
      </div>

      <Divider />

      <div>
        <Typography variant="h4">150th Anniversary Celebrations</Typography>
        <Typography variant="body1">
          2012 saw the celebration of 150 years of rowing at King&apos;s Canterbury. On Saturday
          23rd June the Headmaster hosted a splendid boat club dinner at Canterbury, attended by
          staff, pupils, past and present, parents and friends. This was preceded by rowing at
          Westbere, with two eights in preparation for the celebrations at Henley.
        </Typography>
        <Typography variant="body1">
          At Henley on Saturday 30th June two eights composed of OKS and current boat club members
          rowed over the course, in the tea interval, celebrating the club&apos;s many achievements,
          including Olympians, Internationals, Henley winners and the appearance of King&apos;s in
          five Princess Elizabeth finals.
        </Typography>
        <Typography variant="body1">
          Michael Dover is publishing a book recording the club&apos;s history. This beautiful
          publication gives a fascinating insight, from the early days of rowing at Canterbury to
          the present.
        </Typography>
      </div>
    </>
  );
};

export default Home;
