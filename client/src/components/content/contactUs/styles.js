import mobileWidth from '../../../constants/mobileWidth';
import contentStyles from '../contentStyles';

export default (theme) => ({
  ...contentStyles(theme),
  inputField: {
    marginTop: `${theme.spacing(3)}px`,
  },
  form: {
    [theme.breakpoints.up(mobileWidth)]: {
      width: '40%',
      textAlign: 'center',
    },
  },
  contactUsContainer: {
    [theme.breakpoints.up(mobileWidth)]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down(mobileWidth)]: {
      textAlign: 'center',
    },
  },
  submitButton: {
    marginTop: `${theme.spacing(3)}px`,
  },
  mapIframe: {
    [theme.breakpoints.up(mobileWidth)]: {
      width: '55%',
      height: '720px',
    },
    [theme.breakpoints.down(mobileWidth)]: {
      width: '100%',
      height: '720px',
    },
  },
});
