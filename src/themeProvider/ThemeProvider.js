import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { themeCreator } from "./themes/base";
// import { connect } from "react-redux";

export const ThemeContext = React.createContext((themeName) => {});
const SmartThemeProvider = (props) => {
  const curThemeName = localStorage.getItem("adminTheme") || "LIGHT";
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const setThemeName = (themeName) => {
    localStorage.setItem("adminTheme", themeName);
    _setThemeName(themeName);
    props.themeChange(themeName);
  };
  return React.createElement(
    ThemeContext.Provider,
    { value: setThemeName },
    React.createElement(ThemeProvider, { theme: theme }, props.children)
  );
};
const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

// const mapDispachToProps = (dispatch) => {
//   return {
//     themeChange: (theme) => dispatch({ type: "THEME", value: theme }),
//   };
// };
export default SmartThemeProvider;
