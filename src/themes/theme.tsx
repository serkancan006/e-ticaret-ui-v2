import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// MUI Theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Primary color
    },
    secondary: {
      main: '#d32f2f', // Secondary color (like a red shade)
    },
    error: {
      main: red.A400, // Error color
    },
    background: {
      default: '#f4f6f8', // Background color
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
