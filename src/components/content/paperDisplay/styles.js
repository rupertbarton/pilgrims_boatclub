export default (theme) => ({
  paperBody: {
    margin: `${theme.spacing(10)}px ${theme.spacing(4)}px ${0}px`,
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    '& *': {
      margin: `${theme.spacing(2)}px 0px`,
    },
  },
});
