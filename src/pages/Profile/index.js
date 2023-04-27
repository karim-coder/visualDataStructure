import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
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
            }, 500);
            return;
          }
        }, i * 500);
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
    <div style={{ textAlign: "center" }}>
      <h2>Insertion Sort with Animation</h2>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={generateArray}>Generate Array</button>
      </div>
      <div>
        <div style={{ marginBottom: "10px" }}>
          <input
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
                margin: "5px",
                border: "1px solid black",

                position: "relative",
                ease: "easeOut",
                padding: index === currentIndex ? "15px 20px" : "10px 15px ",
                transition: "1s",
                color:
                  index === currentIndex ||
                  (currentIndex && index <= currentIndex)
                    ? "white"
                    : "black",
                backgroundColor:
                  currentIndex &&
                  // currentIndex >= index &&
                  currentIndex === foundIndex &&
                  index == foundIndex
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
                    left: 12,
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
  );
};

export default LinearSearch;
