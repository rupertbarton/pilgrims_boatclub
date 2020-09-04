export default (theme) => ({
  paperContainer: {
    padding: `${theme.spacing(10)}px ${theme.spacing(4)}px ${0}px`,
  },
  paperContainerMobile: {
    padding: `${theme.spacing(10)}px ${theme.spacing(1)}px ${0}px`,
  },
  paperBody: {
    margin: 'auto',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    '& *': {
      margin: `${theme.spacing(2)}px 0px`,
    },
    maxWidth: '1000px',
  },
  paperBodyMobile: {
    margin: 'auto',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    '& *': {
      margin: `${theme.spacing(2)}px 0px`,
    },
  },
});
