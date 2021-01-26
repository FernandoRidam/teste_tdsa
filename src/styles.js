import {
  makeStyles,
} from '@material-ui/core/styles';

const Styles = makeStyles(theme => ({
  appBar: {
    paddingTop: 5,
  },

  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    // paddingRight: 24
  },

  checks: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 235,
    padding: 0,
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
    marginTop: 15,
    borderRadius: 5,
  },

  select: {
    width: '100%',
    backgroundColor: '#FFF',
    marginTop: 15,
  },

  helperText: {
    fontSize: 11,
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

  titleView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 15,
    paddingTop: 5,
  },

  tableView: {
    height: 500,
    padding: 0,
    backgroundColor: '#FFF',
    overflowY: 'auto',
  },

  tableCommentsView: {
    height: 315,
    padding: 0,
    backgroundColor: '#FFF',
    overflowY: 'auto',
  },

  table: {
    width: '100%',
    maxHeight: 500,
    padding: 5,
  },

  tableComments: {
    width: '100%',
    maxHeight: 500,
    padding: 5,
  },

  tableTitle: {
    color: '#FFF',
  },

  row: {
    height: 45,
  },

  collapseRow: {
    maxHeight: 200,
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

  tableNameColumn: {
    width: '30%',
  },

  tableEmailColumn: {
    width: '30%',
  },

  tableCommentColumn: {
    width: '40%',
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
    maxHeight: 200,
  },

  messageView: {
    padding: 10,
  },

  snackbar: {
    marginTop: 50,
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalView: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    width: '90%',
  },

  modalToolbar: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    minHeight: 40
  },

  modalTitle: {
    flex: '1 1 100%',
    color: theme.palette.primary.contrastText,
    fontSize: theme.typography.fontSize * 1.25
  },

  bodyModal: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    padding: 10,
    paddingBottom: 60,
  },

  divider: {
    marginRight: 5,
    marginLeft: 5,
  },

  form: {
    width: '50%',
    padding: 0,
    paddingRight: 10,
    paddingLeft: 10,
  },

  comments: {
    width: '100%',
  },

  commentsTable: {
    maxHeight: 405,
    padding: 0,
  },

  actions: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 0,
    paddingTop: 10,
  },

  actionsComment: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '100%',
    padding: 0,
    paddingTop: 10,
  },

  action: {
    marginRight: 15,
  },
}));

export default Styles;
