import { createTheme } from '@mui/material/styles';

// ClickUp Brand Colors (from brand page)
const clickupColors = {
  purple: '#7612FA',
  blue: '#40DDFF',
  pink: '#FA12E3',
  yellow: '#FFD700',
  navy: '#101F52',
  // Add other standard colors if needed (e.g., greys, white, black)
  white: '#FFFFFF',
  black: '#000000',
  // Standard status colors (using MUI defaults as placeholders, adjust if ClickUp specifies others)
  error: '#d32f2f', // MUI default red
  warning: '#FFD700', // Using ClickUp Yellow
  info: '#40DDFF',    // Using ClickUp Blue
  success: '#2e7d32', // MUI default green
  // Greys - Define a few shades if needed, otherwise MUI defaults will be used
  grey100: '#F7F7F7', // Example light grey
  grey500: '#A0A0A0', // Example medium grey
  grey900: '#212121', // Example dark grey
};

// Create the Material-UI theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: clickupColors.purple,
      // contrastText: clickupColors.white, // MUI calculates contrast text automatically, but can be overridden
    },
    secondary: {
      main: clickupColors.blue,
      // contrastText: clickupColors.navy, // Adjust if needed
    },
    error: {
      main: clickupColors.error,
    },
    warning: {
      main: clickupColors.warning,
    },
    info: {
      main: clickupColors.info,
    },
    success: {
      main: clickupColors.success,
    },
    text: {
      primary: clickupColors.navy, // Using Navy for primary text
      secondary: clickupColors.grey500, // Example secondary text color
      // disabled: ...
    },
    background: {
      default: clickupColors.white,
      paper: clickupColors.white,
    },
    // Add other colors like accent if needed via module augmentation or direct use
    // accent: {
    //   main: clickupColors.pink,
    // },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontWeightRegular: 500, // Mapping ClickUp 'Medium'
    fontWeightBold: 700,    // Mapping ClickUp 'Bold'
    // Define specific variants if needed, otherwise defaults use the family/weights
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
      textTransform: 'none', // Common practice, adjust if ClickUp uses uppercase buttons
    },
  },
  spacing: 8, // Default MUI spacing factor, can be adjusted (e.g., to 4 or based on 14px/18px relations)
  // Components overrides can be added here later
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         borderRadius: '8px', // Example override
  //       },
  //     },
  //   },
  // },
});

export default theme;

