import { Box, Slider } from "@mui/material";
import { Typography, Button, Link, Grid } from "@mui/material";

import TextCode from "../../../components/TextCode";
import React, { useState, useEffect } from "react";
import "./styles.css";

const marks = [
  {
    value: 250,
    label: "0.25s",
  },
  {
    value: 500,
    label: "0.5s",
  },
  {
    value: 1000,
    label: "1s",
  },
  {
    value: 1500,
    label: "1.5s",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

const InsertionSort = () => {
  const [array, setArray] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(300);
  const [index, setIndex] = useState(null);
  const [index1, setIndex1] = useState(null);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    const newArray = [];
    for (let i = 0; i < 20; i++) {
      newArray.push(Math.floor(Math.random() * 350) + 1);
    }
    setArray(newArray);
  };

  const insertionSort = async () => {
    for (let i = 1; i < array.length; i++) {
      let currentVal = array[i];
      setIndex1(i);
      let j;
      for (j = i - 1; j >= 0 && array[j] > currentVal; j--) {
        console.log(animationSpeed);
        array[j + 1] = array[j];
        setIndex(j + 1);
        await new Promise((resolve) => setTimeout(resolve, animationSpeed));
        array[j] = [currentVal];
        setArray([...array]);
      }
      setIndex(null);
      array[j + 1] = currentVal;
      await new Promise((resolve) => setTimeout(resolve, animationSpeed));
      setArray([...array]);
    }
  };
  // let animationName = `animation${Math.round(Math.random() * 100)}`;
  // let left = `
  //   @-webkit-keyframes ${animationName} {
  //       10% {-webkit-transform:translate(${Math.random() * 300}px, ${
  //   Math.random() * 300
  // }px)}
  //       90% {-webkit-transform:translate(${Math.random() * 300}px, ${
  //   Math.random() * 300
  // }px)}
  //       100% {-webkit-transform:translate(${Math.random() * 300}px, ${
  //   Math.random() * 300
  // }px)}
  //   }`;

  return (
    <div>
      <header>
        <h1>Insertion Sort </h1>
      </header>

      <Typography variant="body1">
        Insertion sort works similar to the sorting of playing cards in hands.
        It is assumed that the first card is already sorted in the card game,
        and then we select an unsorted card. If the selected unsorted card is
        greater than the first card, it will be placed at the right side;
        otherwise, it will be placed at the left side. Similarly, all unsorted
        cards are taken and put in their exact place.
        <br />
        The same approach is applied in insertion sort. The idea behind the
        insertion sort is that first take one element, iterate it through the
        sorted array. Although it is simple to use, it is not appropriate for
        large data sets as the time complexity of insertion sort in the average
        case and worst case is O(n2), where n is the number of items. Insertion
        sort is less efficient than the other sorting algorithms like heap sort,
        quick sort, merge sort, etc.
        <br />
        The basic idea of Insertion Sort is to divide the array into a sorted
        part and an unsorted part. The sorted part starts with the first
        element, and the unsorted part contains all the other elements. The
        algorithm then takes each element from the unsorted part and inserts it
        into the correct position in the sorted part. This is done by comparing
        each element with the elements in the sorted part, starting from the
        end, and shifting the elements up until the correct position is found.
        <br />
        The algorithm repeats this process until the entire array is sorted. The
        time complexity of insertion sort is O(n^2) in the worst case and O(n)
        in the best case (when the array is already sorted).
      </Typography>

      <div className="array-container">
        {array.map((value, idx) => (
          <div>
            <div
              className="array-bar"
              key={idx}
              style={{
                height: `${value}px`,
                backgroundColor:
                  idx === index ? "red" : idx <= index1 ? "green" : "black",
                // animationName: idx === index ? "left" : "",
                animation:
                  idx === index
                    ? `right ${animationSpeed / 1000}s`
                    : idx === index - 1
                    ? `left ${animationSpeed / 1000}s`
                    : "",
                position: "relative",
                // idx === index ? "right" : idx === index - 1 ? "left" : "",
                ease: "easeOut",
                // animationDuration: "1s",

                // animationIterationCount: 1,
                // animationDirection: "normal",
                // animationFillMode: "forwards",
              }}
            ></div>
            <p
              style={{
                animation:
                  idx === index
                    ? `right ${animationSpeed / 1000}s`
                    : idx === index - 1
                    ? `left ${animationSpeed / 1000}s`
                    : "",
                position: "relative",
                // idx === index ? "right" : idx === index - 1 ? "left" : "",
                ease: "easeOut",
                textAlign: "center",
              }}
            >
              {value}
            </p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={generateArray}>Generate New Array</button>
        <button onClick={insertionSort}>Insertion Sort</button>
        <label htmlFor="animationSpeed">Animation Speed:</label>
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Restricted values"
            // defaultValue={1000}
            max={1500}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            onChange={(e) => setAnimationSpeed(e.target.value)}
            step={null}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </Box>
        <input
          type="range"
          min="1"
          max="1000"
          value={animationSpeed}
          onChange={(e) => setAnimationSpeed(e.target.value)}
          id="animationSpeed"
        />
      </div>
      <div style={{ display: "flex", marginTop: 20 }}>
        <Typography
          style={{
            fontWeight: 600,
            marginTop: 10,
            borderBottom: "2px solid black",
          }}
        >
          Pseudo Code of Insertion Sort
        </Typography>
      </div>

      <TextCode
        code={`procedure insertionSort(A: list of sortable items)
        n = length(A)
        for i = 1 to n - 1 do
            j = i
            while j > 0 and A[j-1] > A[j] do
                swap(A[j], A[j-1])
                j = j - 1
            end while
        end for
     end procedure
       `}
      />

      <Grid sx={12} style={{ textAlign: "center" }}>
        <Link
          to={"/quiz"}
          state={{ type: "insertionSort" }}
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

export default InsertionSort;
