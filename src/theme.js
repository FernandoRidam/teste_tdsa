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
      main: '#FFF',
    },

    error: {
      main: '#FF2020',
    },

    background: {
      default: '#FFF',
    },
  },

  overrides: {
    MuiInputLabel: {
      outlined: {
        backgroundColor: '#FFF',
        paddingLeft: 2,
        paddingRight: 2
      }
    }
  },
});

export default theme;
