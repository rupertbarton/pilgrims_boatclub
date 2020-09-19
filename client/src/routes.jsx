import React from 'react';

import AgmAndTrustee from './components/content/agmAndTrustee';
import ClubPage from './components/content/clubPage';
import ContactUs from './components/content/contactUs';
import Gallery from './components/content/gallery';
import Home from './components/content/home';
import KingsSchoolAndOks from './components/content/kingsSchoolAndOks';
import KSCBC from './components/content/kscbc';
import News from './components/content/news';
import ScarlettRowingScholarship from './components/content/scarlettRowingScholarship';
import StrategicPlan from './components/content/strategicPlan';

export default [
  {
    name: 'Home',
    path: '/',
    component: <Home />,
  },
  {
    name: 'KSCBC',
    path: '/kscbc',
    component: <KSCBC />,
  },
  {
    name: 'News',
    path: '/news',
    component: <News />,
  },
  {
    name: 'Gallery',
    path: '/gallery',
    component: <Gallery />,
  },
  {
    name: 'Strategic Plan',
    path: '/strategic-plan',
    component: <StrategicPlan />,
  },
  {
    name: 'King\'s School and OKS',
    path: '/kings-school-and-oks',
    component: <KingsSchoolAndOks />,
  },
  {
    name: 'AGM & Trustee',
    path: '/agm-and-trustee-meetings',
    component: <AgmAndTrustee />,
  },
  {
    name: 'Scarlett Rowing Scholarship',
    path: '/scarlett-rowing-scholarship',
    component: <ScarlettRowingScholarship />,
  },
  {
    name: 'Club Page',
    path: '/club',
    component: <ClubPage />,
  },
  {
    name: 'Contact Us',
    path: '/contact-us',
    component: <ContactUs />,
  },
];
