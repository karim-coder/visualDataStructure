import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./themeProvider/ThemeProvider";
import ScrollToTop from "./components/ScrollToTop";
import reducer from "./hook/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { AuthProvider } from "./lib/AuthJs";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import LanguageConfig from "./config/LanguageConfig";
// const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));

i18next.init({
  // interpolation: { escapeValue: false }, // React already does escaping
  lng:
    (JSON.parse(localStorage.getItem("lng")) &&
      JSON.parse(localStorage.getItem("lng")).code) ||
    "en", // language to use
  resources: LanguageConfig.I18ConfigResources(),
  fallbackLng:
    (JSON.parse(localStorage.getItem("lng")) &&
      JSON.parse(localStorage.getItem("lng")).code) ||
    "en",
});
root.render(
  // <React.StrictMode>
  <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <ScrollToTop />
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </I18nextProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.register();
