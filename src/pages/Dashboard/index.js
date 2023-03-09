import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Dashboard = () => {
  let navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Container style={{ textAlign: "center" }} maxWidth={"xl"}>
      <Grid
        style={{
          textAlign: "center",
          display: "flex",
          marginTop: 20,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          // border: "1px solid black",
          borderRadius: 15,
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
        }}
        container
      >
        <Grid xl={6} lg={6} md={12} sm={12} xs={12}>
          <Typography variant="body1" style={{ fontSize: 50, fontWeight: 800 }}>
            Learn Data Structures and Algorithms
          </Typography>
          <Typography variant="body1" style={{ fontSize: 20, fontWeight: 600 }}>
            Learn online at Your Own Pace with us DSA Course. Master DSA basics
            and practice Data Structure interview questions with GFG DSA self
            paced.
          </Typography>
        </Grid>
        <Grid xl={6} lg={6} md={12} sm={12} xs={12}>
          <img
            src="https://cdn.dribbble.com/users/3837152/screenshots/6797514/3_4x.png"
            style={{ width: "100%", borderRadius: 15 }}
          />
        </Grid>
      </Grid>

      <Grid container sx={{ mt: 3, justifyContent: "space-between" }}>
        <Grid
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            height: 350,
            width: 450,
            borderRadius: 10,
            backgroundColor: "inherit",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => navigate("/course/stack")}
        >
          <img
            src="https://www.freecodecamp.org/news/content/images/2020/09/image-21.png"
            style={{
              width: 450,
              borderRadius: 10,
              objectFit: "cover",
              height: 350,
            }}
          />
          <Typography
            variant="body1"
            style={{
              fontWeight: 700,
              fontSize: 25,
              marginTop: 10,
              color: "white",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backdropFilter: "blur(10px)",
            }}
          >
            Data Structures
          </Typography>
        </Grid>
        <Grid
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            height: 350,
            width: 450,
            borderRadius: 10,
            backgroundColor: "inherit",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => navigate("/course/bubble-sort")}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ZVWAYsodR6004qxVM8Wl3ESZIrfR-W_xhQ&usqp=CAU"
            style={{
              width: 450,
              borderRadius: 10,
              objectFit: "cover",
              height: 350,
            }}
          />
          <Typography
            variant="body1"
            style={{
              fontWeight: 700,
              fontSize: 25,
              marginTop: 10,
              color: "white",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backdropFilter: "blur(10px)",
            }}
          >
            Sorting Algorithms
          </Typography>
        </Grid>
        <Grid
          style={{
            // border: "1px solid black",
            height: 350,
            width: 450,
            borderRadius: 10,
            backgroundColor: "inherit",
            position: "relative",
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        >
          <img
            src="https://th.bing.com/th/id/OIP.8mp6pXz5ONYhGtcxDQTQ7wHaFj?pid=ImgDet&rs=1"
            style={{
              width: 450,
              borderRadius: 10,
              objectFit: "cover",
              height: 350,
            }}
          />
          <Typography
            variant="body1"
            style={{
              fontWeight: 700,
              fontSize: 25,
              color: "white",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backdropFilter: "blur(10px)",
            }}
          >
            Searching Algorithms
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;

// box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
