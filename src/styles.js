import {
  makeStyles,
} from '@material-ui/core/styles';

const Styles = makeStyles(theme => ({
  appBar: {
    paddingTop: 5,
  },

  toolbar: {
    paddingRight: 24
  },

  container: {
    marginTop: theme.spacing( 11 ),
  },

  paper: {
    padding: 15,
    backgroundColor: theme.palette.primary.main,
  },

  paperTitle: {
    marginBottom: 10,
    color: '#FFF',
  },

  select: {
    width: '100%',
    backgroundColor: '#FFF',
  },

  table: {
    padding: 5,
    backgroundColor: '#FFF',
  },

  tableTitle: {
    marginBottom: 10,
    color: '#FFF',
  },

  tableIdColumn: {
    width: '10%'
  },

  tableTitleColumn: {
    width: '60%'
  },

  tableUserColumn: {
    width: '30%'
  },
  snackbar: {
    marginTop: 50,
  },
}));

export default Styles;
