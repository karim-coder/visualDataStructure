import React, { useState, useEffect } from "react";
import { Typography, Button, Link, Grid } from "@mui/material";

import TextCode from "../../../components/TextCode";

import "./styles.css";

function App() {
  const [myArray, setMyArray] = useState([38, 27, 43, 3, 9, 82, 10]);
  const [myDivided, setDivided] = useState([]);
  const [merged, setMerged] = useState([]);

  // useEffect(() => {
  //   generateArray();
  // }, []);

  const generateArray = () => {
    setDivided([]);
    setMerged([]);
    const arr3 = [];
    let a = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < a; i++) {
      arr3.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log("New", a);
    setMyArray([...arr3]);
  };

  const divideArray = async (arr) => {
    let divided = [arr.slice()];
    const result = [];
    result.push(divided);

    while (divided.some((subArr) => subArr.length > 1)) {
      const newDivided = [];
      for (const subArr of divided) {
        const half = Math.ceil(subArr.length / 2);
        newDivided.push(subArr.slice(0, half));
        newDivided.push(subArr.slice(half));
      }
      result.push(newDivided);
      await new Promise((resolve) => setTimeout(resolve, 500));

      setDivided([...result]);
      divided = newDivided;
    }
    result.push(divided);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setDivided([...result]);

    mergeArrays([...result[result.length - 1]]);

    // return result;
  };

  const mergeArrays = async (arr) => {
    console.log("ARR: ", arr);
    const result1 = [];

    // Only push non-empty arrays to result1
    // if (arr.some((subArr) => Array.isArray(subArr) && subArr.length > 0)) {
    //   result1.push([...arr]);
    // }

    while (arr.length > 1) {
      const merged = [];

      for (let i = 0; i < arr.length; i += 2) {
        const subArr1 = arr[i];
        const subArr2 = i + 1 < arr.length ? arr[i + 1] : [];
        const mergedSubArr = [...subArr1, ...subArr2]
          .filter((item) => typeof item === "number")
          .sort((a, b) => a - b);
        merged.push(mergedSubArr);
        // await new Promise((resolve) => setTimeout(resolve, 500));
      }

      arr.splice(0, arr.length, ...merged);

      // Only push non-empty arrays to result1
      if (arr.some((subArr) => Array.isArray(subArr) && subArr.length > 0)) {
        result1.push([...merged]);
        setMerged([...result1]);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }
    setMerged([...result1]);
    await new Promise((resolve) => setTimeout(resolve, 500));
    // return result1;
  };

  // const output = [];
  // const output = mergeArrays(
  //   divideArray(myArray)[divideArray(myArray).length - 1]
  // );

  const renderArray = () => {
    return myArray.map((item, index) => (
      <div
        key={index}
        style={{
          marginRight: 5,
          marginLeft: 5,
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
  return (
    <div>
      <header>
        <h1>Merge Sort </h1>
      </header>
      <Typography variant="body1">
        Merge sort is the sorting technique that follows the divide and conquer
        approach. This article will be very helpful and interesting to students
        as they might face merge sort as a question in their examinations. In
        coding or technical interviews for software engineers, sorting
        algorithms are widely asked. So, it is important to discuss the topic.
        <br />
        Merge sort is similar to the quick sort algorithm as it uses the divide
        and conquer approach to sort the elements. It is one of the most popular
        and efficient sorting algorithm. It divides the given list into two
        equal halves, calls itself for the two halves and then merges the two
        sorted halves. We have to define the merge() function to perform the
        merging.
        <br />
      </Typography>
      <div className="button-container">
        <button onClick={generateArray}>Generate New Array</button>
      </div>
      <div className="button-container">
        <button
          onClick={() => {
            setDivided([]);
            setMerged([]);
            divideArray(myArray);
          }}
        >
          Sort
        </button>
      </div>
      <div style={{ display: "flex", marginTop: 20 }}>{renderArray()}</div>
      <div className="container">
        <div className="tree">
          {myDivided.slice(0, -1).map((subtree, i) => (
            <div key={`subtree-${i}`} className="subtree">
              {subtree
                .filter((item) => item.length > 0)
                .map((item1, j) => (
                  <div
                    key={`subtree-item-${i}-${j}`}
                    className={`subtree-item ${
                      item1.length > 1 ? "merged" : ""
                    }`}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    {item1.map((number, k) => (
                      <div
                        key={`subtree-item-${i}-${j}-${k}`}
                        style={{
                          width: 50,
                          height: 50,
                          border: "1px solid black",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "0 15px",
                        }}
                      >
                        {number}
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="tree">
          {merged.length > 0 &&
            merged.map((subtree, i) => (
              <div key={`subtree-${i}`} className="subtree">
                {subtree
                  .filter((item) => item.length > 0)
                  .map((item1, j) => (
                    <div
                      key={`subtree-item-${i}-${j}`}
                      className={`subtree-item ${
                        item1.length > 1 ? "merged" : ""
                      }`}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      {item1.map((number, k) => (
                        <div
                          key={`subtree-item-${i}-${j}-${k}`}
                          style={{
                            width: 50,
                            height: 50,
                            border: "1px solid black",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "0 15px",
                          }}
                        >
                          {number}
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            ))}
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
          Algorithm
        </Typography>
      </div>

      <TextCode
        code={`step 1: start
        step 2: declare array and left, right, mid variable
        step 3: perform merge function.
            if left > right
                return
            mid= (left+right)/2
            mergesort(array, left, mid)
            mergesort(array, mid+1, right)
            merge(array, left, mid, right)
        step 4: Stop
       `}
      />

      <Grid sx={12} style={{ textAlign: "center" }}>
        <Link
          to={"/quiz"}
          state={{ type: "mergeSort" }}
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained" style={{ backgroundColor: "orange" }}>
            Give a Test
          </Button>
        </Link>
      </Grid>
    </div>
  );
}

export default App;
