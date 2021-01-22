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
    width: '55%'
  },

  tableUserColumn: {
    width: '20%'
  },

  tableActionsColumn: {
    width: '10%'
  },

  tableCollapseColumn: {
    paddingBottom: 0,
    padding: 0,
    width: '5%'
  },

  icon: {
    width: 30,
    height: 30,
  },

  iconDelete: {
    color: theme.palette.error.main,
  },

  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    width: '100%',
  },

  messageView: {
    padding: 10,
  },

  snackbar: {
    marginTop: 50,
  },
}));

export default Styles;
