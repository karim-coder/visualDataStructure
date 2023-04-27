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
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";

import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const images = [
  {
    url: "https://www.freecodecamp.org/news/content/images/2020/09/image-21.png",
    title: "Data Structures",
    width: "30%",
    link: "/course/stack",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ZVWAYsodR6004qxVM8Wl3ESZIrfR-W_xhQ&usqp=CAU",
    title: "Sorting Algorithms",
    width: "30%",
    link: "/course/bubble-sort",
  },
  {
    url: "https://th.bing.com/th/id/OIP.8mp6pXz5ONYhGtcxDQTQ7wHaFj?pid=ImgDet&rs=1",
    title: "Searching Algorithm",
    width: "30%",
    link: "/course/bubble-sort",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const Dashboard = (props) => {
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

  console.log("HI", props.t("topNavBar"));
  console.log("HI", JSON.parse(localStorage.getItem("lng")));

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
            {props.t("dashboard.text")}
          </Typography>
          <Typography variant="body1" style={{ fontSize: 20, fontWeight: 600 }}>
            {props.t("dashboard.subText")}
          </Typography>
        </Grid>
        <Grid xl={6} lg={6} md={12} sm={12} xs={12}>
          <img
            src="https://cdn.dribbble.com/users/3837152/screenshots/6797514/3_4x.png"
            style={{ width: "100%", borderRadius: 15 }}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%",
          justifyContent: "space-between",
          mt: 3,
        }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
              height: 300,
            }}
            onClick={() => navigate(image.link)}
          >
            <ImageSrc
              style={{
                backgroundImage: `url(${image.url})`,
                // borderRadius: 10,
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
              }}
            />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image
              style={{
                borderRadius: 10,
              }}
            >
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  fontSize: 25,
                  fontWeight: 700,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>

      {/* <Grid container sx={{ mt: 3, justifyContent: "space-between" }}>
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
      </Grid> */}
    </Container>
  );
};

// export default Dashboard;

// export default withTranslation("translations")(connect()(Dashboard));
export default withTranslation("translations")(connect()(Dashboard));

// box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
