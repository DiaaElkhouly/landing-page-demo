/**
 * MUI Theme Configuration
 */

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["nacelle", "system-ui", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#5441f7",
    },
    secondary: {
      main: "#4f3af6",
    },
    background: {
      default: "#030712",
      paper: "#0f172a",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.87)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
