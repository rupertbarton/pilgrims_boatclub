import React from 'react';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


const News = () => (
  <>
    <div>
      <Typography variant="h4">Canterbury Pilgrims Boat Club</Typography>
      <Typography variant="body1">
        After 27 years as Chairman of the Canterbury Pilgrims Boat Club,
        {' '}
        <b>Ewan Pearson (MR 1975-1980)</b>
        {' '}
        stepped down at the AGM in September. We are ever grateful to Ewan for his exceptional
        contribution to the Pilgrims and KSCBC. The opportunity to row is undoubtedly one of
        the hallmarks of a great Public School. Due to a lack of rowing coaches KSCBC was under
        threat of closure in 2007. Ewan campaigned relentlessly during that time and the Boat
        Club survived.
      </Typography>
      <Typography variant="body1">
        As Ewan stepped down, it was a privilege to be elected as
        Chairman. I was Captain of Boats in 1995. After school I rowed for the University of
        London and continue to row at Upper Thames.
      </Typography>
      <Typography variant="body1">
        To support rowing at King’s I am delighted to announce the launch of a new Rowing
        Scholarship programme. The Scarlett Rowing Scholarship will now be available for the sixth
        form.
      </Typography>
      <Typography variant="body1">
        As Chairman I have three goals:
      </Typography>
      <ol>
        <Typography variant="body1" component="li">
          To increase membership of the Pilgrims. Please contact Joe Phillips (LN 1983-1988)
          {' '}
          <a href="mailto:joesbphillips@gmail.com">joesbphillips@gmail.com</a>
          {' '}
          for membership enquires.
        </Typography>
        <Typography variant="body1" component="li">
          To secure funding for a continuing Rowing Scholarship programme. CPBC is a Charitable
          Incorporated Organisation (CIO). Donations attract gift aid and tax relief.
        </Typography>
        <Typography variant="body1" component="li">
          To support the mentoring scheme set up by Harry Nichols (GL 2011-2016)
          {' '}
          <a href="mailto:harrynichols25@gmail.com">harrynichols25@gmail.com</a>
          . This scheme mentors OKS as they move from King’s to University
          rowing.
        </Typography>
      </ol>
      <Typography variant="body1">
        <b>Benjamin Loxton-Edwards (MR 1990-1995)</b>
        <br />
        <a href="mailto:loxtonedwards@hotmail.co.uk">loxtonedwards@hotmail.co.uk</a>
      </Typography>
    </div>

    <Divider />

    <Typography variant="h4">News from the river</Typography>
    <Typography variant="body1">
      <b>Helena Barton (MT 2010-2015)</b>
      {' '}
      represented Durham University over the last four years while completing a Masters in
      International Relations. Most notably, she won the women’s Championship pair at BUCS Regatta
      in 2018. She trialled for the Great Britain U23 team in 2019 and reached the crew formation
      stages, she narrowly missed selection after two weeks of seat racing. She be trialling again
      for Great Britain this year and looks forward to racing with Tideway Scullers School at
      Henley.
    </Typography>
    <Typography variant="body1">
      <b>Connie Pidoux (MR 1997-2003)</b>
      {' '}
      has enjoyed an outstanding career as a coxswain at Thames Rowing Club. She won the Thames
      Cup at Henley in 2017 and 2018. Her tenacity saw her through to a third Henley final in
      2019. It was thrilling and closely fought race but this final went to the visiting Dutch
      crew.
    </Typography>
    <Typography variant="body1">
      <b>Freddie Allinson (SH 2012-2017)</b>
      {' '}
      has been a key member of the impressive Newcastle University eight. They reached the
      semi-finals of the Temple Challenge Cup at Henley in 2019 losing to Northeastern University,
      U.S.A by 1/3 length. Over the summer he won a Bronze Medal with the Great Britain U23 team
      at the European Championships in Greece.
    </Typography>
    <Typography variant="body1">
      <b>Galvin Brady (MR 2010-2015)</b>
      {' '}
      writes to say he has concluded 4 years racing for Georgia Tech, U.SA. He raced three times
      at the Head of the Charles and won several medals at the National Championships.
    </Typography>

    <Divider />

    <Typography variant="h4">Dates for your diary</Typography>
    <Typography variant="body1">
      Join us for our annual lunch at Henley on
      {' '}
      <b>Wednesday 1st July</b>
      . There will also be a smaller
      gathering for lunch on Saturday 4th July. All Pilgrims and OKS are welcome.
    </Typography>
    <Typography variant="body1">
      The Boat Club dinner and row takes place on Saturday 19th September. We aim for two eights
      this year.
    </Typography>
  </>
);

export default News;
