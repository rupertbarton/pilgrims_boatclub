import contentStyles from '../contentStyles';

export default (theme) => ({
  ...contentStyles(theme),
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
