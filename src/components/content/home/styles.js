import mobileWidth from '../../../constants/mobileWidth';
import contentStyles from '../contentStyles';

export default (theme) => ({
  ...contentStyles(theme),
  mainImageContainer: {
    [theme.breakpoints.up(mobileWidth)]: {
      float: 'right',
      width: '50%',
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.down(mobileWidth)]: {
      maxWidth: 500,
      margin: 'auto',
    },
  },
  mainImage: {
    width: '100%',
    marginBottom: 0,
  },
  mainText: {
    width: '100%',
    marginTop: 0,
  },
  centerText: {
    textAlign: 'center',
  },
  externalLinksContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  externalLink: {
    width: '33.33%',
    textAlign: 'center',
    minWidth: '270px',
  },
});
