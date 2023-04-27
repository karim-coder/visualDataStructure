import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { TextField, Typography } from "@mui/material";
import { Button, Link, Grid } from "@mui/material";

import TextCode from "../../../components/TextCode";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BinarySearch = () => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState("");
  const [lowIndex, setLowIndex] = useState(0);
  const [highIndex, setHighIndex] = useState(0);
  const [midIndex, setMidIndex] = useState(0);
  const [result, setResult] = useState(null);
  const [colorArray, setColorArray] = useState([]);

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    status: "success",
    message: "",
  });

  const handleClick = (newState) => {
    setState({ open: true, ...newState });
  };

  const handleClose = (event, reason) => {
    // if (reason === "clickaway") {
    //   return;
    // }
    console.log("Hi", state);

    setState({
      open: false,
      vertical: "top",
      horizontal: "center",
      status: "success",
      message: "",
    });
  };

  const generateArray = () => {
    let arr = [];
    for (let i = 0; i < 15; i++) {
      arr.push(Math.floor(Math.random() * 50) + 1);
    }
    arr.sort((a, b) => a - b);
    setArray(arr);
    setTarget(arr[Math.floor(Math.random() * 15)]);
    setLowIndex(0);
    setHighIndex(arr.length - 1);
    setMidIndex(Math.floor((arr.length - 1) / 2));
    setResult(null);
    setColorArray(arr.map(() => "#ffffff"));
  };

  const renderArray = () => {
    return array.map((item, index) => (
      <div
        key={index}
        style={{
          backgroundColor: colorArray[index],
          marginRight: colorArray[index] !== "#ffffff" ? 10 : 5,
          marginLeft: colorArray[index] !== "#ffffff" ? 10 : 0,
          height: "50px",
          width: "50px",
          textAlign: "center",
          lineHeight: "50px",
          borderRadius: "5px",
          border: "1px solid #cccccc",
          fontWeight: "bold",
          ease: "easeOut",
          transition: "1s",
          // marginRight: "5px",
        }}
      >
        {item}
      </div>
    ));
  };

  const search = () => {
    console.log("Hi");
    let low = lowIndex;
    let high = highIndex;
    let interval;
    setColorArray(array.map(() => "#ffffff"));
    setResult(null);
    clearInterval(interval);

    interval = setInterval(() => {
      let mid = Math.floor((low + high) / 2);
      setMidIndex(mid);
      setColorArray((prevArray) =>
        prevArray.map((item, index) => {
          if (index === mid) return "#ffa500";
          if (low <= index && index <= high) return "#ccc";
          return "#ffffff";
        })
      );

      if (array[mid] === target) {
        setResult(mid);
        handleClick({
          vertical: "top",
          horizontal: "center",
          status: "success",
          message: "Found it successfully",
        });
        clearInterval(interval);
        setColorArray((prevArray) =>
          prevArray.map((item, index) => {
            if (index === mid) return "#00ff00";

            return "#ffffff";
          })
        );

        return;
      } else if (array[mid] < target) {
        low = mid + 1;
        setLowIndex(low);
      } else {
        high = mid - 1;
        setHighIndex(high);
      }
    }, 1500);
  };

  return (
    <div
      style={{
        marginTop: "30px",
        marginBottom: 20,
      }}
    >
      <Typography variant="body1" style={{ fontSize: 30, fontWeight: 700 }}>
        Binary Search
      </Typography>
      <Typography variant="body1">
        Binary Search Algorithm. Searching is the process of finding some
        particular element in the list. If the element is present in the list,
        then the process is called successful, and the process returns the
        location of that element. Otherwise, the search is called unsuccessful.
        Linear Search and Binary Search are the two popular searching
        techniques. Here we will discuss the Binary Search Algorithm.
        <br /> Binary search is the search technique that works efficiently on
        sorted lists. Hence, to search an element into some list using the
        binary search technique, we must ensure that the list is sorted. Binary
        search follows the divide and conquer approach in which the list is
        divided into two halves, and the item is compared with the middle
        element of the list. If the match is found then, the location of the
        middle element is returned. Otherwise, we search into either of the
        halves depending upon the result produced through the match.
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          // display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "10px",
          marginTop: 40,
        }}
      >
        <button onClick={generateArray}>Generate Array</button>

        <div style={{ marginBottom: "20px", marginTop: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div style={{ marginRight: "10px" }}>Target:</div>
            <TextField
              type="number"
              value={target}
              onChange={(e) => {
                setTarget(parseInt(e.target.value));
                setLowIndex(0);
                setHighIndex(array.length - 1);
                setMidIndex(Math.floor((array.length - 1) / 2));
                setResult(null);
                setColorArray(array.map(() => "#ffffff"));
              }}
            />
          </div>
          {array.length > 0 && (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <div style={{ marginRight: "10px" }}>low:</div>
                <div style={{ marginRight: "10px" }}>{lowIndex}</div>
                <div style={{ marginRight: "10px" }}>array:</div>
                <div style={{ display: "flex" }}>{renderArray()}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <div style={{ marginRight: "10px" }}>mid:</div>
                <div style={{ marginRight: "10px" }}>{midIndex}</div>
                <div style={{ marginRight: "10px" }}>target:</div>
                <div>{target}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <div style={{ marginRight: "10px" }}>high:</div>
                <div style={{ marginRight: "10px" }}>{highIndex}</div>
                <div style={{ marginRight: "10px" }}>result:</div>
                <div>{result !== null ? result : "-"}</div>
              </div>
            </>
          )}
        </div>
        {result === null && (
          <Button onClick={search} style={{ marginTop: "20px" }}>
            Search
          </Button>
        )}
        <Stack spacing={2} sx={{ width: "100%" }}>
          {/* <Button variant="outlined" onClick={handleClick}>
            Open success snackbar
          </Button> */}
          <Snackbar
            open={state.open}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{
              vertical: state.vertical,
              horizontal: state.horizontal,
            }}
          >
            <Alert
              onClose={handleClose}
              severity={state.status}
              sx={{ width: "100%" }}
            >
              {state.message}
            </Alert>
          </Snackbar>
        </Stack>
      </div>

      <div style={{ display: "flex", marginTop: 20 }}>
        <Typography
          style={{
            fontWeight: 600,
            marginTop: 10,
            borderBottom: "2px solid black",
          }}
        >
          Algorithm Code:
        </Typography>
      </div>

      <TextCode
        code={`binarySearch(arr, x, low, high)
        repeat till low = high
               mid = (low + high)/2
               if (x = arr[mid])
                   return mid
              else if (x > arr[mid])
                   low = mid + 1
              else
                   high = mid – 1
       `}
      />

      <Grid sx={12} style={{ textAlign: "center" }}>
        <Link
          to={"/quiz"}
          state={{ type: "binarySearch" }}
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained" style={{ backgroundColor: "orange" }}>
            Give a Test
          </Button>
        </Link>
      </Grid>
    </div>
  );
};

export default BinarySearch;
