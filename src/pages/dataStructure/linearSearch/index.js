import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, Button, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import TextCode from "../../../components/TextCode";
const LinearSearch = () => {
  const [arr, setArr] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(-1);

  const [searchTerm, setSearchTerm] = useState(null);
  const [foundIndex, setFoundIndex] = useState(null);

  const generateArray = () => {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(Math.floor(Math.random() * 10) + 1);
    }
    setArr(array);
    setCurrentIndex(null);
    setSearchTerm(null);
    setFoundIndex(null);
  };

  const linearSearch = () => {
    let n = arr.length;
    let tempArr = [...arr];
    setCurrentIndex(0);
    if (arr[0] === searchTerm) {
      setFoundIndex(0);
      return;
    } else {
      for (let i = 1; i < n; i++) {
        setTimeout(() => {
          setCurrentIndex(i);

          if (n - 1 === i) {
            console.log("HI");
            setTimeout(() => {
              setCurrentIndex(null);
              setFoundIndex(-1);
            }, 700);
            return;
          }
        }, i * 700);
        if (arr[i] === searchTerm) {
          setFoundIndex(i);
          return;
        }
      }
    }

    // setTimeout(() => {
    //   setCurrentIndex(-1);
    // }, n * 1000);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(parseInt(event.target.value));
    setCurrentIndex(null);
    setFoundIndex(null);
  };

  console.log("CurrentIndex: ", currentIndex);
  console.log("Found: ", foundIndex);

  return (
    <div>
      <Typography variant="body1" style={{ fontSize: 30, fontWeight: 700 }}>
        Linear Search
      </Typography>
      <Typography variant="body1">
        Linear Search Algorithm. Searching is the process of finding some
        particular element in the list. If the element is present in the list,
        then the process is called successful, and the process returns the
        location of that element; otherwise, the search is called unsuccessful.
        Linear Search is defined as a sequential search algorithm that starts at
        one end and goes through each element of a list until the desired
        element is found, otherwise the search continues till the end of the
        data set.
        <br />
        Linear search is a sequential searching algorithm where we start from
        one end and check every element of the list until the desired element is
        found. It is the simplest searching algorithm.
        <br />
        Linear search is also called as sequential search algorithm. It is the
        simplest searching algorithm. In Linear search, we simply traverse the
        list completely and match each element of the list with the item whose
        location is to be found. If the match is found, then the location of the
        item is returned; otherwise, the algorithm returns NULL. It is widely
        used to search an element from the unordered list, i.e., the list in
        which items are not sorted. The worst-case time complexity of linear
        search is O(n).
      </Typography>
      <div style={{ textAlign: "center", marginTop: 30 }}>
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <button onClick={generateArray}>Generate Array</button>
        </div>
        <div>
          <div style={{ marginBottom: "10px" }}>
            <TextField
              type="number"
              placeholder="Enter value to search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          {/* <p className="search-value">{searchTerm}</p> */}
          <div style={{ marginTop: 50 }}>
            {arr.map((value, index) => (
              <div
                key={index}
                style={{
                  display: "inline-block",
                  // height: "50px",
                  // width: "50px",
                  // marginRight: (index === currentIndex) !== "#ffffff" ? 10 : 5,
                  // marginLeft: (index === currentIndex) !== "#ffffff" ? 10 : 0,
                  textAlign: "center",
                  // lineHeight: "50px",
                  borderRadius: index === currentIndex ? "50%" : "5px",
                  border: "1px solid #cccccc",
                  fontWeight: "bold",
                  ease: "easeOut",
                  transition: "0.7s",
                  margin: 10,

                  position: "relative",

                  padding: index === currentIndex ? "20px 25px" : "15px 20px ",

                  color:
                    index === currentIndex ||
                    (currentIndex && index <= currentIndex)
                      ? "white"
                      : "black",
                  backgroundColor:
                    currentIndex === foundIndex && index == foundIndex
                      ? "green"
                      : currentIndex && index <= currentIndex
                      ? "black"
                      : "white",
                }}
              >
                {currentIndex === index && (
                  <span
                    style={{
                      position: "absolute",
                      top: -30,
                      left: 18,
                      color: searchTerm === arr[currentIndex] ? "green" : "red",
                      ease: "easeOut",
                      transition: "1s",
                    }}
                  >
                    {searchTerm === arr[currentIndex] ? (
                      <DoneIcon style={{ color: "green" }} />
                    ) : (
                      <CloseIcon style={{ color: "red" }} />
                    )}
                  </span>
                )}
                {value}
              </div>
            ))}
          </div>
          {foundIndex == -1 ? (
            <p>Not found.</p>
          ) : (
            foundIndex > 0 &&
            currentIndex === foundIndex && (
              <p>Found it at position {foundIndex + 1}.</p>
            )
          )}
        </div>
        <div style={{ marginTop: "20px" }}>
          <button onClick={linearSearch}>Search</button>
        </div>
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
        code={`LinearSearch(array, key)
        for each item in the array
          if item == value
            return its index
       `}
      />

      <Grid sx={12} style={{ textAlign: "center" }}>
        <Link
          to={"/quiz"}
          state={{ type: "Linear Search" }}
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

export default LinearSearch;
