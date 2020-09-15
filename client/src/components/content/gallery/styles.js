import contentStyles from '../contentStyles';

export default (theme) => ({
  ...contentStyles(theme),
  feed: {
    margin: '1% 1%',
    '& img': {
      margin: '1% 1%',
      width: '23%',
    },
  },
});
