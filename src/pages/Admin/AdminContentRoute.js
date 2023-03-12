import React, { lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import User from "./components/User";

const AdminContentRoute = () => {
  // let location = useLocation();
  // let navigate = useNavigate();
  // let params = useParams();
  // return <Component {...props} router={{ location, navigate, params }} />;
  return (
    <Routes>
      <Route
        exact
        index
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <h1>This is admin page</h1>
          </Suspense>
        }
      />
      <Route
        exact
        path="user"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <User />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AdminContentRoute;
