import logo from "./logo.svg";
import "./App.css";
import store from "./store/Store";
import { ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import MainLayout from "./modules/common/MainLayout";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3c8476",
    },
    secondary: {
      main: "#171718",
    },
  },
  typography: {
    fontSize: 11,
    fontFamily: "Verdana",
    fontWeightLight: 300,
  },
  props: {
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: "small",
    },
    MuiTooltip: {
      arrow: true,
    },
    MuiAutocomplete: {
      size: "small",
      fontFamily: "Verdana",
      fontSize: 11,
    },
  },
});

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MainLayout />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
