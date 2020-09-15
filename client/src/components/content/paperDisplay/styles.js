import mobileWidth from '../../../constants/mobileWidth';

export default (theme) => ({
  paperContainer: {
    [theme.breakpoints.up(mobileWidth)]: {
      padding: `${theme.spacing(10)}px ${theme.spacing(4)}px ${0}px`,
    },
    [theme.breakpoints.down(mobileWidth)]: {
      padding: `${theme.spacing(10)}px ${theme.spacing(1)}px ${0}px`,
    },
  },
  paperBody: {
    margin: 'auto',
    '& *': {
      margin: `${theme.spacing(2)}px 0px`,
    },
    [theme.breakpoints.up(mobileWidth)]: {
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
      maxWidth: '1000px',
    },
    [theme.breakpoints.down(mobileWidth)]: {
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    },
  },
});