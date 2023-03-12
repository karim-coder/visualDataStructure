import React from "react";
import User from "./components/User";
import { NavLink } from "react-router-dom";
import AdminContentRoute from "./AdminContentRoute";
import { Grid, Typography } from "@mui/material";
const Admin = () => {
  return (
    <Grid
      container
      style={{
        padding: 5,
        backgroundColor: "#EBECF0",
        backgroundSize: "100%",
        margin: 0,
        minHeight: "100vh",
        // heigh: "100%",
      }}
    >
      <Grid xl={2} lg={3} md={4} sm={12} xs={12}>
        <div
          style={{
            margin: 10,
            backgroundColor: "white",
            borderRadius: 10,
            padding: 10,
            display: "block",
          }}
        >
          <NavLink to={"/admin"}>
            <Typography>Admin Page </Typography>
          </NavLink>
          <NavLink to={"/admin/user"}>
            <Typography>User Page </Typography>
          </NavLink>
        </div>
      </Grid>

      <Grid xl={10} lg={8.9} md={8} sm={12} xs={12} style={{}}>
        <div
          style={{
            margin: 10,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <AdminContentRoute />
        </div>
      </Grid>
    </Grid>
  );
};

export default Admin;
