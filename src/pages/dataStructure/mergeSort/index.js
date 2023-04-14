import React, { useState, useEffect } from "react";

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

  console.log("Output: ", myDivided);
  return (
    <div>
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
      <div>{myArray.join(", ")}</div>
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
    </div>
  );
}

export default App;
