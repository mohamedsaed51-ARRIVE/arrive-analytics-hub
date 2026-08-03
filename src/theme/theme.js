import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#07269B",
    },

    secondary: {
      main: "#22C7D9",
    },

    background: {
      default: "#F6F8FC",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#1F2937",
      secondary: "#64748B",
    },

    success: {
      main: "#16A34A",
    },

    warning: {
      main: "#F59E0B",
    },
  },

  typography: {
    fontFamily:
      '"Inter","Segoe UI","Roboto","Arial",sans-serif',

    h3: {
      fontWeight: 700,
    },

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 600,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 18,
  },
});

export default theme;