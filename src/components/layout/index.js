import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { withTranslation } from "react-i18next";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

// export default Layout;
export default withTranslation("translations")(Layout);
