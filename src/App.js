import React, { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Stack from "./pages/dataStructure/stack";
import Array from "./pages/dataStructure/array";
import Courses from "./pages/Courses";

import Layout from "./components/layout";
import { withTranslation } from "react-i18next";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Profile = lazy(() => import("./pages/Profile"));
const Quiz = lazy(() => import("./pages/Quiz"));
const MyTests = lazy(() => import("./pages/MyTests"));

function App(props) {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            exact
            path="home"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Dashboard props={props} />
              </Suspense>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            exact
            path="/signup"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Signup />
              </Suspense>
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            exact
            path="/quiz"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Quiz />
              </Suspense>
            }
          />
          <Route
            exact
            path="/my-tests"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MyTests />
              </Suspense>
            }
          />
          <Route path="/course/*" element={<Courses />} />

          {/* <Courses /> */}
          {/* <Route
            exact
            path="/array"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Array />
              </Suspense>
            }
          /> */}
        </Route>
      </Routes>
    </div>
  );
}

// export default App;
export default withTranslation("translations")(App);
