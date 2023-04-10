import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#78ADD2", // Iceberg
      dark: "#0072AA", // Honolulu Blue
      light: "#21AA47", // Eton Blue
      lighter: "#A4D0A0", // American Green
      contrastText: "#f5f7fa",
    },
    secondary: {
      main: "#FFD152",
      contrastText: "#000000",
    },
    background: {
      default: "#f5f7fa",
      paper: "#ffffff",
    },
  },
});

export default theme;
