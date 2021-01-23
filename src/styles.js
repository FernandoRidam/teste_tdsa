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

  textField: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 5,
  },

  select: {
    width: '100%',
    backgroundColor: '#FFF',
  },

  linearProgress: {
    position: 'absolute',
    color: theme.palette.primary.contrastText,
    left: 0,
    right: 0,
    bottom: 0,
    borderBottomRightRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: theme.shape.borderRadius,
  },

  tableView: {
    height: 500,
    padding: 0,
    overflowY: 'scroll',
  },

  table: {
    height: 500,
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
    width: '50%'
  },

  tableUserColumn: {
    width: '25%'
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
    width: 30,
    height: 30,
    marginLeft: 10,
    color: theme.palette.error.main,
  },

  closedCollapse: {
    padding: 0,
  },

  textInfo: {
    width: '100%',
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
