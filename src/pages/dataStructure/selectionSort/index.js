import { Box, Slider } from "@mui/material";
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

const SelectionSort = () => {
  const [array, setArray] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(1000);
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

      let j;
      for (j = i - 1; j >= 0 && array[j] > currentVal; j--) {
        console.log(animationSpeed);
        array[j + 1] = array[j];

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

  const selectionSort = async () => {
    for (let i = 0; i < array.length - 1; i++) {
      let minIdx = i;
      setIndex1(i);

      for (let j = i + 1; j < array.length; j++) {
        // await new Promise((resolve) => setTimeout(resolve, animationSpeed));
        //  setIndex(j);
        if (array[j] < array[minIdx]) {
          setIndex(j);
          minIdx = j;
        }
      }
      let temp = array[i];
      array[i] = array[minIdx];
      array[minIdx] = temp;
      await new Promise((resolve) => setTimeout(resolve, animationSpeed));
      setArray([...array]);
    }
  };
  let styleSheet = document.styleSheets[0];
  let keyframes = `
    @-webkit-keyframes left1 {
     
        0% {
          left: 0px;
          top: 0px;
        }
        100% {
          left: 35px;
          top: 0px;
        }
      
     
    }
    
  `;

  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  let right1 = `
    @-webkit-keyframes right1 {

        0% {
          /* background: red; */
          right: 0px;
          top: 0px;
        }
        100% {
          /* background: yellow; */
          right:  ${(index - index1) * 35}px;
          top: 0px;
        }

    }`;
  styleSheet.insertRule(right1, styleSheet.cssRules.length);

  return (
    <div>
      <header>
        <h1>Selection Sort </h1>
      </header>

      <div className="array-container">
        {array.map((value, idx) => (
          <div>
            <div
              className="array-bar"
              key={idx}
              style={{
                height: `${value}px`,
                backgroundColor:
                  idx === index ? "red" : idx < index1 ? "green" : "black",
                // animationName: idx === index ? "left" : "",
                animation:
                  idx === index
                    ? `right1 ${animationSpeed / 1000}s`
                    : index > index1
                    ? `left1 ${animationSpeed / 1000}s`
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
                    ? `right1 ${animationSpeed / 1000}s`
                    : idx === index - 1
                    ? `left1 ${animationSpeed / 1000}s`
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
        <button onClick={selectionSort}>Selection Sort</button>
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
    </div>
  );
};

export default SelectionSort;
