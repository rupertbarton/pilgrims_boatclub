import React from 'react';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import agmMinutes20March2019 from '../../../assets/pdf/agmMinutes20March2019.pdf';
import trusteeMinutes20March2019 from '../../../assets/pdf/trusteeMinutes20March2019.pdf';


const AgmAndTrustee = () => (
  <>
    <div>
      <Typography variant="h4">AGM Meeting Minutes</Typography>
      <Typography variant="body1">
        Please find links to the past AGM meeting minutes here:
      </Typography>
      <ul>
        <Typography variant="body1" component="li">
          <a href={agmMinutes20March2019} rel="noopener noreferrer" target="_blank">20th March 2019 Minutes</a>
        </Typography>
      </ul>
    </div>

    <Divider />

    <div>
      <Typography variant="h4">Trustee Meeting Minutes</Typography>
      <Typography variant="body1">
        Please find links to the past Trustee meeting minutes here:
      </Typography>
      <ul>
        <Typography variant="body1" component="li">
          <a href={trusteeMinutes20March2019} rel="noopener noreferrer" target="_blank">20th March 2019 Minutes</a>
        </Typography>
      </ul>
    </div>
  </>
);

export default AgmAndTrustee;
