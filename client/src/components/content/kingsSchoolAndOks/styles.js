import mobileWidth from '../../../constants/mobileWidth';
import contentStyles from '../contentStyles';

export default (theme) => ({
  ...contentStyles(theme),

  externalLinksContainer: {
    [theme.breakpoints.up(mobileWidth)]: {
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
    },
  },
  externalLink: {
    [theme.breakpoints.up(mobileWidth)]: {
      width: '48%',
    },
    textAlign: 'center',
    minWidth: '270px',
  },
});
