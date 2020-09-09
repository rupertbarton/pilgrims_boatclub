import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import fredScarlett from '../../../assets/img/fredScarlett.jpeg';
import styles from './styles';


const Home = () => {
  const classes = makeStyles(styles)();

  return (
    <div>
      <Typography variant="h4">The Scarlett Rowing Scholarship</Typography>
      <Typography variant="body1">
        <img className={classes.image} src={fredScarlett} alt="Fred Scarlett" />
        It is 20 years since
        {' '}
        <b>Fred Scarlett (LN 1988-1993)</b>
        {' '}
        won an Olympic Gold medal in the eight at Sydney 2000. It was a remarkable performance and
        widely regarded as the most powerful display of eights rowing ever.
      </Typography>
      <Typography variant="body1">
        Great Britain had last won the men’s Olympic eight in 1912. After
        previous disappointment at the World Championships in 1999, this crew peaked at exactly the
        right time. Excellent blade work, total commitment and above all self-belief brought this
        historic victory.
      </Typography>
      <Typography variant="body1">
        The Pilgrims mark this 20 year anniversary by offering the
        {' '}
        <b>‘Scarlett Rowing Scholarship’</b>
        . This is a Sixth Form scholarship available for boys and girls of character and integrity
        who display excellence at rowing, sculling or as a coxswain.
      </Typography>
      <Typography variant="body1">
        This scholarship will be determined by recommendation and
        assessment. It brings a 10% reduction in school fees.
      </Typography>

    </div>
  );
};

export default Home;
