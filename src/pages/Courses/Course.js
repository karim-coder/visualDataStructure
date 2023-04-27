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
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useSelector } from "react-redux";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import isEmpty from "../../utils/isEmpty";

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
              marginLeft: 10,
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
              marginLeft: 10,
            }
      }
      to={props.link}
    >
      <Typography style={{ fontFamily: "Martian Mono", fontWeight: 400 }}>
        {props.title}
      </Typography>
      {props.learned ? (
        <CheckCircleRoundedIcon style={{ color: "green" }} />
      ) : (
        <KeyboardArrowRightIcon />
      )}
    </NavLink>
  );
};

const Course = (props) => {
  const user = useSelector((store) => store.user);
  console.log("User: ", user);
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
            {props.t("sideBarMenu.dataStructure")}
          </Typography>

          {/* <Links link="/course/array" title="Array - Data Structure" /> */}
          <Links
            learned={
              !isEmpty(user) &&
              user?.topicLearned.length > 0 &&
              user?.topicLearned.toString().includes("stack")
                ? true
                : false
            }
            link="/course/stack"
            title={props.t("sideBarMenu.stack")}
          />
          <Links
            learned={
              !isEmpty(user) &&
              user?.topicLearned.length > 0 &&
              user?.topicLearned.toString().includes("queue")
                ? true
                : false
            }
            link="/course/queue"
            title={props.t("sideBarMenu.queue")}
          />
          <Links
            learned={
              !isEmpty(user) &&
              user?.topicLearned.length > 0 &&
              user?.topicLearned.toString().includes("linkedList")
                ? true
                : false
            }
            link="/course/linked-list"
            title={props.t("sideBarMenu.linkedList")}
          />
          <Links
            learned={
              !isEmpty(user) &&
              user?.topicLearned.length > 0 &&
              user?.topicLearned.toString().includes("hashTable")
                ? true
                : false
            }
            link="/course/hash-table"
            title={props.t("sideBarMenu.hashTable")}
          />
          <Typography
            variant="body1"
            style={{
              fontSize: 18,
              fontWeight: 600,
              marginTop: 15,
              marginBottom: 10,
              marginLeft: 10,
              color: "black",
              fontFamily: "Martian Mono",
            }}
          >
            Sorting Algorithms
          </Typography>
          <Links
            learned={
              !isEmpty(user) &&
              user?.topicLearned.length > 0 &&
              user?.topicLearned.toString().includes("bubbleSort")
                ? true
                : false
            }
            link="/course/bubble-sort"
            title={props.t("sideBarMenu.bubbleSort")}
          />
          <Links
            learned={
              !isEmpty(user) &&
              user?.topicLearned.length > 0 &&
              user?.topicLearned.toString().includes("insertionSort")
                ? true
                : false
            }
            link="/course/insertion-sort"
            title={props.t("sideBarMenu.insertionSort")}
          />
          <Links
            learned={
              !isEmpty(user) &&
              user?.topicLearned.length > 0 &&
              user?.topicLearned.toString().includes("selectionSort")
                ? true
                : false
            }
            link="/course/selection-sort"
            title={props.t("sideBarMenu.selectionSort")}
          />
          <Links
            learned={
              !isEmpty(user) &&
              user?.topicLearned.length > 0 &&
              user?.topicLearned.toString().includes("mergeSort")
                ? true
                : false
            }
            link="/course/merge-sort"
            title={props.t("sideBarMenu.mergeSort")}
          />
          <Links
            learned={
              !isEmpty(user) &&
              user?.topicLearned.length > 0 &&
              user?.topicLearned.toString().includes("heapSort")
                ? true
                : false
            }
            link="/course/heap-sort"
            title={props.t("sideBarMenu.heapSort")}
          />
          <Typography
            variant="body1"
            style={{
              fontSize: 18,
              fontWeight: 600,
              marginTop: 15,
              marginBottom: 10,
              marginLeft: 10,
              color: "black",
              fontFamily: "Martian Mono",
            }}
          >
            Searching Algorithms
          </Typography>
          <Links
            learned={
              !isEmpty(user) &&
              user?.topicLearned.length > 0 &&
              user?.topicLearned.toString().includes("binarySearch")
                ? true
                : false
            }
            link="/course/binary-search"
            title={"Binary Search"}
          />
          <Links
            learned={
              !isEmpty(user) &&
              user?.topicLearned.length > 0 &&
              user?.topicLearned.toString().includes("linearSearch")
                ? true
                : false
            }
            link="/course/linear-search"
            title={"Linear Search"}
          />
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

// export default Course;
// export default withTranslation("translations")(Course);

export default withTranslation("translations")(connect()(Course));
