import React from "react";
import { ThemeProvider } from "styled-components";
import { themeModes } from "../constants";
import GlobalStyle from "./Global.style";

const lightTheme = {
  type: "light",
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      light: "#DFF5F9",
      main: "#00ABC5",
      dark: "#0089A2",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
      contrastText: "#fff",
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2",
      contrastText: "#fff",
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
      contrastText: "#fff",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
      success: "#fff",
      error: "#fff",
      warning: "#000",
      info: "#fff",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    link: {
      main: "#00ABC5",
      hover: "#0089A2",
      active: "#0089A2",
      disabled: "rgba(0, 0, 0, 0.26)",
    },
  },
};

const darkTheme = {
  type: "light",
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      light: "#DFF5F9",
      main: "#00ABC5",
      dark: "#0089A2",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
      contrastText: "#fff",
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2",
      contrastText: "#fff",
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
      contrastText: "#fff",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    link: {
      main: "#00ABC5",
      hover: "#0089A2",
      active: "#0089A2",
      disabled: "rgba(0, 0, 0, 0.26)",
    },
  },
};

const Theme = ({ children, themeMode }) => (
  <ThemeProvider theme={themeMode === themeModes.DARK ? darkTheme : lightTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Theme;

export const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopL: `(min-width: ${sizes.desktop})`
};

// https://stackoverflow.com/questions/52484812/reactjs-material-ui-breakpoints