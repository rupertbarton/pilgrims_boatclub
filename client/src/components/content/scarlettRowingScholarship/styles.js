import contentStyles from '../contentStyles';

export default (theme) => ({
  ...contentStyles(theme),
  image: {
    float: 'right',
    width: '50%',
  },
  video: {
    display: 'block',
    width: 560,
    height: 315,
    margin: 'auto',
  },
});
