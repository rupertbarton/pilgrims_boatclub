import contentStyles from '../contentStyles';

export default (theme) => ({
  ...contentStyles(theme),
  centerText: {
    textAlign: 'center',
  },
  tableContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dateSignOff: {
    marginTop: theme.spacing(6),
  },
});
