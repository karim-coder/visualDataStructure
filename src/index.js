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
// const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
