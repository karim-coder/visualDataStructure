import React, { useState, useEffect } from "react";
import "./styles.css";

function MergeSort() {
  const [state, setState] = useState([4, 1, 3, 6, 4, 7, 8]);

  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    const merged = [];
    let i = 0,
      j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
    }
    while (i < left.length) {
      merged.push(left[i]);
      i++;
    }
    while (j < right.length) {
      merged.push(right[j]);
      j++;
    }
    return merged;
  };

  const animateSort = () => {
    const arr = state.slice();
    const sortedArray = mergeSort(arr);
    const animations = [];

    // Add the animation classes to the elements as they move
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animations.length; i++) {
      const [index, newIndex] = animations[i];
      const barStyle = arrayBars[index].style;
      const newBarStyle = arrayBars[newIndex].style;
      barStyle.backgroundColor = "red";
      newBarStyle.backgroundColor = "red";
      setTimeout(() => {
        barStyle.height = `${sortedArray[newIndex]}px`;
        newBarStyle.height = `${sortedArray[index]}px`;
        barStyle.backgroundColor = "blue";
        newBarStyle.backgroundColor = "blue";
      }, i * 100);
    }

    setState(sortedArray);
  };

  return (
    <div>
      <button onClick={animateSort}>Sort</button>
      <div className="array-container">
        {state.map((value, index) => (
          <div
            className="array-bar"
            key={index}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default MergeSort;
