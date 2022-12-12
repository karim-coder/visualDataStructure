import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
