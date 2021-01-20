import {
  createMuiTheme,
} from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3889C7',
    },

    secondary: {
      main: '#697782',
    },

    error: {
      main: '#FF2020',
    },

    background: {
      default: '#fff',
    },
  },
});

export default theme;
