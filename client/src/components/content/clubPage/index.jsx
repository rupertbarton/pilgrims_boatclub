import React from 'react';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


const ClubPage = () => (
  <>
    <div>
      <Typography variant="h4">Club Page</Typography>
      <Typography variant="h5">Officers</Typography>
      <Divider />
      <Typography variant="body1">
        President
        <br />
        Michael Brown
      </Typography>
      <Divider />
      <Typography variant="body1">
        Chairman
        <br />
        Benjamin  Loxton-Edwards
        <br />
        Telephone Number: 07968 410 169
        <br />
        Email Address:
        {' '}
        <a href="mailto:loxtonedwards@hotmail.co.uk">loxtonedwards@hotmail.co.uk</a>
      </Typography>
      <Divider />
      <Typography variant="body1">
        Treasurer
        <br />
        Alistair Brown
        <br />
        Telephone Number: 07928 347877
        <br />
        Email Address:
        {' '}
        <a href="mailto:alibrown@hotmail.co.uk">alibrown@hotmail.co.uk</a>
      </Typography>
      <Divider />
      <Typography variant="body1">
        Membership Secretary
        <br />
        Andrew Rudkin
        <br />
        Telephone Number: 07973 263245
        <br />
        Email Address:
        {' '}
        <a href="mailto:andrew@rudkin.us">andrew@rudkin.us</a>
      </Typography>
    </div>
  </>
);

export default ClubPage;
