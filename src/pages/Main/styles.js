import { makeStyles } from '@material-ui/core/styles';

const Styles = makeStyles(theme => ({
  appBar: {
    paddingTop: 5,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },

  toolbar: {
    paddingRight: 24
  },
}));

export default Styles;
