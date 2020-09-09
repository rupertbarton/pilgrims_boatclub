import React from 'react';

import HomeIcon from '@material-ui/icons/Home';

import Home from './components/content/home';
import ScarlettRowingScholarship from './components/content/scarlettRowingScholarship';

export default [
  {
    name: 'Home',
    path: '/',
    icon: <HomeIcon />,
    component: <Home />,
  },
  {
    name: 'KSCBC',
    path: '/KSCBC',
    icon: <HomeIcon />,
    component: <div>HiKSCBC!!!!!</div>,
  },
  {
    name: 'News',
    path: '/news',
    icon: <HomeIcon />,
    component: <div>HiNews!!!!!</div>,
  },
  {
    name: 'Offcuts',
    path: '/offcuts',
    icon: <HomeIcon />,
    component: <div>HiOffcuts!!!!!</div>,
  },
  {
    name: 'Gallery',
    path: '/gallery',
    icon: <HomeIcon />,
    component: <div>HiGallery!!!!!</div>,
  },
  {
    name: 'King\'s School and OKS',
    path: '/kings-school-and-oks',
    icon: <HomeIcon />,
    component: <div>HiKing!!!!!</div>,
  },
  {
    name: 'AGM & Trustee',
    path: '/agm-and-trustee-meetings',
    icon: <HomeIcon />,
    component: <div>HiAGM & Trustee !!!!!</div>,
  },
  {
    name: 'Scarlett Rowing Scholarship',
    path: '/scarlett-rowing-scholarship',
    icon: <HomeIcon />,
    component: <ScarlettRowingScholarship />,
  },
  {
    name: 'Club Page',
    path: '/club',
    icon: <HomeIcon />,
    component: <div>HiClub !!!!!</div>,
  },
  {
    name: 'Contact Us',
    path: '/contact-us',
    icon: <HomeIcon />,
    component: <div>Contact US</div>,
  },
];
