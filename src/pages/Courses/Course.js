import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Collapse,
  Drawer,
  Hidden,
  Snackbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Alert,
  Grid,
  Typography,
} from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CourseContentRouting from "./CourseContentRouting";
import { NavLink } from "react-router-dom";
import BlurLinearIcon from "@mui/icons-material/BlurLinear";
import LensBlurIcon from "@mui/icons-material/LensBlur";
import AllOutIcon from "@mui/icons-material/AllOut";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({}));

const Links = (props) => {
  return (
    <NavLink
      style={({ isActive }) =>
        isActive
          ? {
              // color: "black",
              display: "flex",
              color: "#0039C6",
              textDecoration: "none",
              width: "auto",
              // border: "1px solid white",
              backgroundColor: "#F5F6FD",
              fontSize: 16,
              borderRadius: 3,
              padding: "10px 10px",
              justifyContent: "space-between",
            }
          : {
              display: "flex",
              textDecoration: "none",
              width: "auto",
              color: "black",
              // border: "1px solid #ccc",
              borderRadius: 3,
              padding: "10px 10px",
              fontSize: 16,
              // color: "black",
              justifyContent: "space-between",
            }
      }
      to={props.link}
    >
      <Typography style={{ fontFamily: "Martian Mono", fontWeight: 400 }}>
        {props.title}
      </Typography>
      <KeyboardArrowRightIcon />
    </NavLink>
  );
};

const Course = () => {
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
      <Grid
        xl={2}
        lg={3}
        md={4}
        sm={12}
        xs={12}
        style={
          {
            // padding: 20,
            // marginTop: 15,
            // backgroundColor: "white",
            // borderRadius: 10,
            // marginTop: 10,
          }
        }
      >
        <div
          style={{
            margin: 10,
            backgroundColor: "white",
            borderRadius: 10,
            padding: 10,
          }}
        >
          <Typography
            variant="body1"
            style={{
              fontSize: 20,
              fontWeight: 600,
              marginBottom: 20,
              marginLeft: 10,
              color: "black",
              fontFamily: "Martian Mono",
            }}
          >
            Data Structures
          </Typography>

          {/* <Links link="/course/array" title="Array - Data Structure" /> */}
          <Links link="/course/stack" title="Stack" />
          <Links link="/course/queue" title="Queue" />
          <Links link="/course/linked-list" title="Linked-List" />
          <Links link="/course/insertion-sort" title="Bubble Sort" />
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
          <CourseContentRouting />
        </div>
      </Grid>
    </Grid>
  );
};

export default Course;
