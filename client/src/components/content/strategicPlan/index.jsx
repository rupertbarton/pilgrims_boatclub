import React from 'react';

import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import styles from './styles';


const Home = () => {
  const classes = makeStyles(styles)();

  const membershipFeesTable = () => {
    const membershipFees = [{
      name: 'Cadet (KSC pupil)',
      current: '£1.00',
      proposed: '£5.00',
    }, {
      name: 'Junior (under 23)',
      current: '£10.00',
      proposed: '£20.00',
    }, {
      name: 'Full/Associate',
      current: '£20.00',
      proposed: '£40.00',
    }];

    return (
      <>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Current</TableCell>
              <TableCell>Proposed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {membershipFees.map((membershipFee) => (
              <TableRow key={membershipFee.name}>
                <TableCell component="th" scope="row">{membershipFee.name}</TableCell>
                <TableCell>{membershipFee.current}</TableCell>
                <TableCell>{membershipFee.proposed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  };

  return (
    <>
      <div>
        <Typography variant="h3" className={classes.centerText}>2019 Strategic Plan</Typography>
        <Typography variant="h4">Objects</Typography>
        <Typography variant="body1">
          Briefly, the objects of the charity are to support rowing at KSC by the provision of
          facilities, equipment, financial and other support.
        </Typography>
        <Typography variant="body1">
          In order to achieve those objects, we need to plan and monitor development of numerous
          areas of activity which are set out below.
        </Typography>
      </div>

      <Divider />

      <div>
        <Typography variant="h4">Membership</Typography>
        <Typography variant="body1">We will increase the number of full (non-student) members by:</Typography>
        <ul>
          <Typography variant="body1" component="li">
            inviting all current members of KSCBC to sign up, thus providing a future source of full
            rate membership subscriptions.
          </Typography>
          <Typography variant="body1" component="li">
            inviting all OKS who ever rowed at KSC to become members.
          </Typography>
        </ul>
        <Typography variant="body1">We will increase the membership yield by:</Typography>
        <ul>
          <li>
            <Typography variant="body1">
              raising the level of subscriptions as follows:
            </Typography>
            {membershipFeesTable()}
          </li>
          <Typography variant="body1" component="li">
            claiming Gift Aid tax relief on subscriptions, currently an uplift of 25%.
          </Typography>
        </ul>
        <Typography variant="body1">At present, regular subscriptions yield only £14.38 per member.</Typography>
        <Typography variant="body1">
          We will diarise to ask Cadet and Junior members to amend their
          Standing Orders to the Full rate at the appropriate time.
        </Typography>
      </div>

      <Divider />

      <div>
        <Typography variant="h4">Legacies</Typography>
        <Typography variant="body1">
          We will invite current members to leave a legacy.  To encourage them to do this, we will:
        </Typography>
        <ul>
          <Typography variant="body1" component="li">
            produce a legacy flyer/brochure
          </Typography>
          <Typography variant="body1" component="li">
            organise a regular legacy club event
          </Typography>
        </ul>
      </div>

      <Divider />

      <div>
        <Typography variant="h4">Grants</Typography>
        <Typography variant="body1">
          We will subsidise rowing equipment, both water and land-based, in accordance with a
          rolling 10 year replacement schedule drawn up in consultation with KSCBC.
        </Typography>
        <Typography variant="body1">
          We will subsidise coaching and training camps by making grants:
        </Typography>
        <ul>
          <Typography variant="body1" component="li">
            to KSCBC to pay for coaches
          </Typography>
          <Typography variant="body1" component="li">
            to KSCBC to support training camps
          </Typography>
          <Typography variant="body1" component="li">
            to individual rowers
          </Typography>
        </ul>
        <Typography variant="body1">
          In addition to making grants to subsidise coaching and training camps, we will mark
          outstanding achievement by:
        </Typography>
        <ul>
          <Typography variant="body1" component="li">
            awarding prizes to deserving individual rowers
          </Typography>
          <Typography variant="body1" component="li">
            being trustees of the Beaugié Medal which we will award in keeping with the conditions
            stipulated by the Beaugié family
          </Typography>
          <Typography variant="body1" component="li">
            hosting dinner at the Schools’ Head of the River
          </Typography>
        </ul>
        <Typography variant="body1">
          We will continue to make the annual Pilgrims Award to a rower who the Management Committee
          consider will benefit from it in their rowing career.
        </Typography>
      </div>

      <Divider />

      <div>
        <Typography variant="h4">Publicity</Typography>
        <Typography variant="body1">
          We will promote our existence and activities by:
        </Typography>
        <ul>
          <Typography variant="body1" component="li">
            regular newsletters to our members
          </Typography>
          <Typography variant="body1" component="li">
            organising the Henley lunch for members and supporters
          </Typography>
          <Typography variant="body1" component="li">
            hosting the Canterbury dinner
          </Typography>
          <Typography variant="body1" component="li">
            keeping our website up to date
          </Typography>
        </ul>
      </div>

      <Divider />

      <div>
        <Typography variant="h4">Finance</Typography>
        <Typography variant="body1">
          We will keep our finances in first-class order by:
        </Typography>
        <ul>
          <Typography variant="body1" component="li">
            adhering to current financial reporting standards
          </Typography>
          <Typography variant="body1" component="li">
            claiming Gift Aid tax relief wherever possible
          </Typography>
          <Typography variant="body1" component="li">
            audit of our financial records by means of an Hon. Auditor (or Independent Examiner if
            income exceeds £25,000 in any one accounting year)
          </Typography>
          <Typography variant="body1" component="li">
            adopting an investment strategy for surplus funds, seeking a total return of 4% p.a.
          </Typography>
        </ul>
      </div>

      <Divider />

      <div>
        <Typography variant="h4">Security</Typography>
        <Typography variant="body1">
          We will keep our records confidential by:
        </Typography>
        <ul>
          <Typography variant="body1" component="li">
            adhering to our General Data Protection Regulation policy at all times
          </Typography>
          <Typography variant="body1" component="li">
            keeping records containing personal information in a secure cloud-based location
            (e.g. Dropbox)
          </Typography>
        </ul>
      </div>

      <Divider />

      <div>
        <Typography variant="h4">Facilities</Typography>
        <Typography variant="body1">
          We will support the rowing environment enjoyed by KSCBC by:
        </Typography>
        <ul>
          <Typography variant="body1" component="li">
            entertaining requests for improving current boathouse and river facilities
          </Typography>
          <Typography variant="body1" component="li">
            engaging with the management team of the Westbere Lakes project
          </Typography>
          <Typography variant="body1" component="li">
            seeking representation on the Westbere Lakes project management team
          </Typography>
          <Typography variant="body1" component="li">
            contributing advice and financial support to the Westbere Lakes project as appropriate
          </Typography>
        </ul>
      </div>

      <div className={classes.dateSignOff}>
        <Typography variant="body1">
          September 2018
        </Typography>
      </div>
    </>
  );
};

export default Home;
