import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#2e3e87",
      dark: "#27346a",
      light: "#5472af",
    },
    secondary: {
      main: "#ff9900",
      dark: "#cc7a00",
      light: "#ffbb33",
    },
    text: {
      primary: "#f2f2f2",
    },
    feedback: {
      success1: "#18794E",
      success2: "#CCEBD7",
      success3: "#DDF3E4",
      alert1: "#CD2B31",
      alert2: "#FDD8D8",
      alert3: "#FFE5E5",
    },
  },
  typography: {
    fontFamily: "Inter",
    h1: {
      fontWeight: 700,
      fontSize: "2.75rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.25rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.75rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
    },
  },
});
