import contentStyles from '../contentStyles';

export default (theme) => ({
  ...contentStyles(theme),
  mainImageContainer: {
    float: 'right',
    width: '50%',
    marginLeft: theme.spacing(2),
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
