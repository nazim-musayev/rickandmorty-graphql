import { createTheme } from '@mui/material/styles';

const primaryColor = "#fff";
const secondaryColor = "rgb(255, 152, 0)";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      dark: "#000"
    },
    secondary: {
      main: secondaryColor
    },
    error: {
      main: "rgb(214, 61, 46)"
    },
    info: {
      main: "#52586b"
    },
    success: {
      main: "rgb(85, 204, 68)"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 660,
      lg: 1024,
      xl: 1270,
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: primaryColor,
          fontFamily: "sans-serif"
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          '&:hover': {
            color: secondaryColor,
            cursor: "pointer"
          }
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: primaryColor
        }
      }
    }
  }
});

export default theme;