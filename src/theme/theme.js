import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1565C0",
    },

    secondary: {
      main: "#0F172A",
    },

    background: {
      default: "#F4F7FC",
      paper: "#FFFFFF",
    },

    success: {
      main: "#2E7D32",
    },

    warning: {
      main: "#ED6C02",
    },
  },

  typography: {
    fontFamily: "Roboto, Arial",
  },

  shape: {
    borderRadius: 14,
  },
});

export default theme;