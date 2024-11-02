import { Box, Slider } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./styles.css";
import { Typography, Button, Link, Grid } from "@mui/material";
import TextCode from "../../../components/TextCode";

// Add this to your styles.css
const styleContent = `
.array-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 400px;
  margin: 20px;
}

.bar-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2px;
  transition: transform 0.5s ease;
}

.array-bar {
  width: 30px;
  margin: 0 2px;
  transition: all 0.3s ease;
  border-radius: 2px 2px 0 0;
}

.array-bar.comparing {
  background-color: #FFD700 !important;
  animation: pulse 0.5s ease infinite alternate;
}

.array-bar.minimum {
  background-color: #FF4444 !important;
}

.array-bar.sorted {
  background-color: #4CAF50 !important;
}

.array-bar.swapping {
  animation: swapPulse 0.5s ease;
}

@keyframes pulse {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.7;
  }
}

@keyframes swapPulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.bar-value {
  text-align: center;
  margin-top: 5px;
  font-size: 12px;
  transition: all 0.3s ease;
}
`;

const marks = [
  { value: 250, label: "0.25s" },
  { value: 500, label: "0.5s" },
  { value: 1000, label: "1s" },
  { value: 1500, label: "1.5s" },
];

const SelectionSort = () => {
  const [array, setArray] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(1000);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [comparingIndex, setComparingIndex] = useState(null);
  const [minIndex, setMinIndex] = useState(null);
  const [sortedIndices, setSortedIndices] = useState(new Set());
  const [isSorting, setIsSorting] = useState(false);
  const [swappingIndices, setSwappingIndices] = useState([]);

  useEffect(() => {
    generateArray();
    const style = document.createElement("style");
    style.textContent = styleContent;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const generateArray = () => {
    const newArray = Array.from(
      { length: 20 },
      () => Math.floor(Math.random() * 300) + 50
    );
    setArray(newArray);
    setSortedIndices(new Set());
    setCurrentIndex(null);
    setComparingIndex(null);
    setMinIndex(null);
    setSwappingIndices([]);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const selectionSort = async () => {
    setIsSorting(true);
    const n = array.length;
    const newArray = [...array];

    for (let i = 0; i < n - 1; i++) {
      setCurrentIndex(i);
      let minIdx = i;
      setMinIndex(minIdx);

      // Finding the minimum element
      for (let j = i + 1; j < n; j++) {
        setComparingIndex(j);
        await sleep(animationSpeed / 2);

        if (newArray[j] < newArray[minIdx]) {
          minIdx = j;
          setMinIndex(minIdx);
        }
      }

      // Swapping
      if (minIdx !== i) {
        setSwappingIndices([i, minIdx]);
        await sleep(animationSpeed / 2);

        // Perform the actual swap
        const temp = newArray[i];
        newArray[i] = newArray[minIdx];
        newArray[minIdx] = temp;

        setArray([...newArray]);
        await sleep(animationSpeed / 2);
        setSwappingIndices([]);
      }

      setSortedIndices((prev) => new Set([...prev, i]));
      setComparingIndex(null);
    }

    // Mark the last element as sorted
    setSortedIndices((prev) => new Set([...prev, n - 1]));

    // Reset states
    setCurrentIndex(null);
    setComparingIndex(null);
    setMinIndex(null);
    setIsSorting(false);
  };

  const getBarColor = (index) => {
    if (sortedIndices.has(index)) return "#4CAF50"; // Sorted
    if (index === minIndex) return "#FF4444"; // Current minimum
    if (index === comparingIndex) return "#FFD700"; // Being compared
    if (index === currentIndex) return "#2196F3"; // Current position
    return "#333"; // Default
  };

  return (
    <div>
      <header>
        <h1>Selection Sort</h1>
      </header>

      <Typography variant="body1" style={{ margin: "20px 0" }}>
        Selection sort is a simple and efficient sorting algorithm that works by
        repeatedly selecting the smallest element from the unsorted portion of
        the list and moving it to the sorted portion of the list.
      </Typography>

      <div className="array-container">
        {array.map((value, idx) => (
          <div key={idx} className="bar-wrapper">
            <div
              className={`array-bar 
                ${idx === comparingIndex ? "comparing" : ""}
                ${idx === minIndex ? "minimum" : ""}
                ${sortedIndices.has(idx) ? "sorted" : ""}
                ${swappingIndices.includes(idx) ? "swapping" : ""}
              `}
              style={{
                height: `${value}px`,
                backgroundColor: getBarColor(idx),
              }}
            />
            <div className="bar-value">{value}</div>
          </div>
        ))}
      </div>

      <div className="controls" style={{ margin: "20px", textAlign: "center" }}>
        <Button
          variant="contained"
          onClick={generateArray}
          disabled={isSorting}
          style={{ margin: "0 10px" }}
        >
          Generate New Array
        </Button>
        <Button
          variant="contained"
          onClick={selectionSort}
          disabled={isSorting}
          style={{ margin: "0 10px" }}
        >
          Start Sorting
        </Button>

        <Box sx={{ width: 300, margin: "20px auto" }}>
          <Typography gutterBottom>Animation Speed</Typography>
          <Slider
            value={animationSpeed}
            min={100}
            max={1500}
            marks={marks}
            step={null}
            disabled={isSorting}
            onChange={(_, value) => setAnimationSpeed(value)}
          />
        </Box>
      </div>

      <div style={{ margin: "20px 0" }}>
        <Typography variant="h6" gutterBottom>
          Color Legend:
        </Typography>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <div>🟦 Current Position</div>
          <div>🟨 Comparing</div>
          <div>🟥 Current Minimum</div>
          <div>🟩 Sorted</div>
        </div>
      </div>

      <TextCode
        code={`selectionSort(array, size)
  repeat (size - 1) times
    set the first unsorted element as the minimum
    for each of the unsorted elements
      if element < currentMinimum
        set element as new minimum
    swap minimum with first unsorted position
  end selectionSort`}
      />

      <Grid sx={12} style={{ textAlign: "center", margin: "20px 0" }}>
        <Link
          to={"/quiz"}
          state={{ type: "selectionSort" }}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            style={{ backgroundColor: "orange" }}
            disabled={isSorting}
          >
            Take Quiz
          </Button>
        </Link>
      </Grid>
    </div>
  );
};

export default SelectionSort;
