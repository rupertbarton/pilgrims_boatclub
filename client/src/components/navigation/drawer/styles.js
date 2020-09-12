const drawerWidth = 240;

export default (theme) => ({
  logo: {
    height: theme.spacing(8),
    width: 'auto',
  },
  logoButton: {
    padding: 0,
    width: '100%',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
});
