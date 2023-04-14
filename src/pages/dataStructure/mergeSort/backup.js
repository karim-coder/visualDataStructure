// import React, { useState, useRef } from "react";
// import "./styles.css";

// function MergeSort() {
//   const [numbers, setNumbers] = useState(
//     Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1)
//   );
//   const [isSorting, setIsSorting] = useState(false);
//   const numberElements = useRef([]);

//   const mergeSort = () => {
//     setIsSorting(true);
//     const animations = [];
//     const sortedArray = [...numbers];
//     mergeSortHelper(sortedArray, 0, sortedArray.length - 1, animations);
//     for (let i = 0; i < animations.length; i++) {
//       const [left, right, merged] = animations[i];
//       for (let j = left; j <= right; j++) {
//         numberElements.current[j].style.backgroundColor = "orange";
//       }
//       setTimeout(() => {
//         for (let j = left; j <= right; j++) {
//           numberElements.current[j].style.backgroundColor = "";
//         }
//         for (let j = left; j <= right; j++) {
//           numberElements.current[j].style.height = `${merged[j - left]}px`;
//         }
//       }, i * 500);
//     }
//     setTimeout(() => {
//       setIsSorting(false);
//     }, animations.length * 500);
//   };

//   const mergeSortHelper = (array, start, end, animations) => {
//     if (start === end) {
//       return;
//     }
//     const middle = Math.floor((start + end) / 2);
//     mergeSortHelper(array, start, middle, animations);
//     mergeSortHelper(array, middle + 1, end, animations);
//     merge(array, start, middle, end, animations);
//   };

//   const merge = (array, start, middle, end, animations) => {
//     const leftArray = array.slice(start, middle + 1);
//     const rightArray = array.slice(middle + 1, end + 1);
//     const mergedArray = [];
//     let i = 0;
//     let j = 0;
//     while (i < leftArray.length && j < rightArray.length) {
//       if (leftArray[i] <= rightArray[j]) {
//         mergedArray.push(leftArray[i]);
//         i++;
//       } else {
//         mergedArray.push(rightArray[j]);
//         j++;
//       }
//     }
//     while (i < leftArray.length) {
//       mergedArray.push(leftArray[i]);
//       i++;
//     }
//     while (j < rightArray.length) {
//       mergedArray.push(rightArray[j]);
//       j++;
//     }
//     for (let i = start; i <= end; i++) {
//       array[i] = mergedArray[i - start];
//     }
//     animations.push([start, end, mergedArray]);
//   };

//   const resetArray = () => {
//     setNumbers(
//       Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1)
//     );
//   };

//   return (
//     <div className="App">
//       <div className="number-container">
//         {numbers.map((number, index) => (
//           <div
//             className="number"
//             key={index}
//             ref={(element) => (numberElements.current[index] = element)}
//             style={{ height: `${number}px` }}
//           ></div>
//         ))}
//       </div>
//       <div className="button-container">
//         <button onClick={resetArray}>Reset Array</button>
//         <button onClick={mergeSort} disabled={isSorting}>
//           Sort
//         </button>
//         {isSorting && <p>Sorting...</p>}
//       </div>
//     </div>
//   );
// }
// export default MergeSort;

import React, { useState, useRef } from "react";
import "./styles.css";

function MergeSort() {
  const [numbers, setNumbers] = useState(
    Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1)
  );
  const [isSorting, setIsSorting] = useState(false);
  const numberElements = useRef([]);
  const [array, setArray] = useState([]);

  const mergeSort = () => {
    setIsSorting(true);
    const animations = [];
    const sortedArray = [...numbers];
    mergeSortHelper(sortedArray, 0, sortedArray.length - 1, animations);

    for (let i = 0; i < animations.length; i++) {
      const [left, right, merged] = animations[i];
      for (let j = left; j <= right; j++) {
        numberElements.current[j].style.backgroundColor = "orange";
      }
      setTimeout(() => {
        for (let j = left; j <= right; j++) {
          numberElements.current[j].style.backgroundColor = "";
        }
        for (let j = left; j <= right; j++) {
          numberElements.current[j].style.height = `${merged[j - left]}px`;
        }
      }, i * 500);
    }
    setTimeout(() => {
      setIsSorting(false);
    }, animations.length * 500);
  };

  const mergeSortHelper = (array, start, end, animations) => {
    if (start === end) {
      return;
    }
    const middle = Math.floor((start + end) / 2);
    mergeSortHelper(array, start, middle, animations);
    mergeSortHelper(array, middle + 1, end, animations);

    merge(array, start, middle, end, animations);
  };

  const merge = (array, start, middle, end, animations) => {
    const leftArray = array.slice(start, middle + 1);
    const rightArray = array.slice(middle + 1, end + 1);
    const mergedArray = [];
    let i = 0;
    let j = 0;
    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] <= rightArray[j]) {
        mergedArray.push(leftArray[i]);
        i++;
      } else {
        mergedArray.push(rightArray[j]);
        j++;
      }
    }
    while (i < leftArray.length) {
      mergedArray.push(leftArray[i]);
      i++;
    }
    while (j < rightArray.length) {
      mergedArray.push(rightArray[j]);
      j++;
    }
    for (let i = start; i <= end; i++) {
      array[i] = mergedArray[i - start];
    }
    console.log("mergedArray", mergedArray);
    let arr = [...array];
    arr.push([...mergedArray]);
    setArray(arr);
    animations.push([start, end, mergedArray]);
  };

  const resetArray = () => {
    setNumbers(
      Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1)
    );
  };
  console.log("array", array);
  return (
    <div className="App">
      <div className="number-container">
        {numbers.map((number, index) => (
          <div
            className="number"
            key={index}
            ref={(element) => (numberElements.current[index] = element)}
            style={{ height: `${number}px` }}
          >
            {number}
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={resetArray}>Reset Array</button>
        <button onClick={mergeSort} disabled={isSorting}>
          Sort
        </button>
        {isSorting && <p>Sorting...</p>}
      </div>
    </div>
  );
}
export default MergeSort;

/*

I want result like this Okay
[5, 2, 35, 6, 2, 4]

[5, 2, 35]  [6, 2, 4]
[5]   [2, 35]   [6]   [2, 4]
[5]   [2]  [35]   [6]   [2]   [4]
[5]   [2, 35]   [6]   [2, 4]
[2, 5, 35]  [2, 6, 4]
[2, 2, 4, 5, 6, 34]

5, 2, 35, 6, 2, 4, 8, 3, 9, 1, 7

5, 2, 35, 6, 2, 4     8, 3, 9, 1, 7

5, 2, 35   6, 2, 4     8, 3, 9    1, 7

5, 2    35   6, 2    4     8, 3    9    1, 7

5    2    35   6   2    4     8     3    9    1     7
Original Array: 
[[5]    [2]    [35]   [6]   [2]    [4 ]    [8]     [3 ]   [9 ]   [1]     [7]]

The output: 
[[2, 5]    [35]   [2, 6]    [4 ]    [3, 8]    [9]    [1, 7]]

[[2, 5, 35]   [2, 4, 6]     [3, 8, 9]    [1, 7]]

[[2, 2, 4, 5, 6, 35]     [1, 3, 7, 8, 9]]

[[1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 35]]




[[5]    [2]    [35]   [6]   [2]    [4 ]    [8]     [3 ]   [9 ]   [1]     [7]]
[[2, 5], [35], [2, 6], [4], [3, 8], [9], [1, 7], [10]]
[[2, 5, 35], [2, 4, 6], [3, 8, 9], [1, 7, 10]]
[[2, 2, 4, 5, 6, 35], [1, 3, 7, 8, 9, 10]]
[[1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 10, 35]]




myArray=[5, 2, 35, 6, 2, 4, 8, 3, 9, 1, 7]

Divide Output
[5,2,35,6,2,4] [8,3,9,1,7] 
[5,2,35] [6,2,4] [8,3,9] [1,7] 
[5,2] [35] [6,2] [4] [8,3] [9] [1] [7] 
[5] [2] [35] [] [6] [2] [4] [] [8] [3] [9] [] [1] [] [7] [] 

Merge Output
[[2, 5]    [35]   [2, 6]    [4 ]    [3, 8]    [9]    [1, 7]]
[[2, 5, 35]   [2, 4, 6]     [3, 8, 9]    [1, 7]]
[[2, 2, 4, 5, 6, 35]     [1, 3, 7, 8, 9]]
[[1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 35]]



const arr = [[5], [2], [35], [], [6], [2], [4], [], [8], [3], [9], [], [1], [], [7], []];

while (arr.length > 1) {
  const merged = [];
  for (let i = 0; i < arr.length; i += 2) {
    merged.push([...arr[i], ...arr[i+1]]);
  }
  console.log(merged)
  arr.splice(0, arr.length, ...merged);
}

console.log(arr); // [[5, 2, 35, 6, 2, 4, 8, 3, 9, 1, 7]]



*Correct 
const arr = [[5], [2], [35], [], [6], [2], [4], [], [8], [3], [9], [], [1], [], [7], []];

const result = [];

while (arr.length > 1) {
  const merged = [];

  for (let i = 0; i < arr.length; i += 2) {
    merged.push([...arr[i], ...arr[i + 1]]);
  }
  
  const sorted = merged.map(a => a.sort((x, y) => x - y)); // sort each array after merging
  arr.splice(0, arr.length, ...sorted);
  result.push([...sorted]);
}


console.log(result); // [[5, 2, 35, 6, 2, 4, 8, 3, 9, 1, 7]]



const arr = [[5], [2], [35], [], [6], [2], [4], [], [8], [3], [9], [], [1], [], [7], []];

const filteredArr = arr.filter(subArr => subArr.length > 0);

const groupedArr = filteredArr.reduce((acc, subArr, index) => {
  if (index === 0 || filteredArr[index - 1].length === 0) {
    acc.push([subArr]);
  } else {
    acc[acc.length - 1].push(subArr);
  }
  return acc;
}, []);

const mergedArr = groupedArr.map(group => {
  return group.reduce((acc, subArr) => {
    return acc.concat(subArr);
  }, []);
});

let finalArr = [mergedArr];

while (finalArr[0].length > 1) {
  const newFinalArr = [];

  for (let i = 0; i < finalArr[0].length; i += 2) {
    if (i + 1 < finalArr[0].length) {
      const mergedGroup = finalArr[0][i].concat(finalArr[0][i + 1]);
      newFinalArr.push(mergedGroup);
    } else {
      newFinalArr.push(finalArr[0][i]);
    }
  }

  finalArr = [newFinalArr].concat(finalArr);
}

console.log(finalArr[0]);






import React, { useState } from "react";

function MergeSort(props) {
  const [myArray, setMyArray] = useState([5, 2, 35, 6, 2, 4, 8, 3, 9, 1, 7]);

  const divideArray = (arr) => {
    let divided = [arr];
    const result = [];
    while (divided.some((subArr) => subArr.length > 1)) {
      const newDivided = [];
      for (const subArr of divided) {
        const half = Math.ceil(subArr.length / 2);
        newDivided.push(subArr.slice(0, half));
        newDivided.push(subArr.slice(half));
      }
      result.push(newDivided);
      divided = newDivided;
    }
    result.push(divided);
    return result;
  };

  const mergeArrays = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
    return result;
  };

  const renderDividedArrays = (arr) => {
    return arr.map((val, i) => (
      <span key={i} style={{ margin: 10 }}>
        {Array.isArray(val) ? `[${val}]` : val}&nbsp;
      </span>
    ));
  };

  const renderMergedArrays = (arr) => {
    let merged = arr;
    while (merged.length > 1) {
      const newMerged = [];
      for (let i = 0; i < merged.length; i += 2) {
        if (merged[i + 1] !== undefined) {
          newMerged.push(mergeArrays(merged[i], merged[i + 1]));
        } else {
          newMerged.push(merged[i]);
        }
      }
      merged = newMerged;
    }
    return merged[0];
  };

  return (
    <div>
      <div>
        <h2>Original Array:</h2>
        <p>{myArray.join(", ")}</p>
        <h2>Divided Arrays:</h2>
        {divideArray(myArray).map((arr, index) => (
          <div key={index}>{renderDividedArrays(arr)}</div>
        ))}
        <h2>Merged Array:</h2>
        <p>{renderMergedArrays(divideArray(myArray)).join(", ")}</p>
      </div>
    </div>
  );
}

export default MergeSort;











import React, { useState } from "react";

function MergeSort(props) {
  const [myArray, setMyArray] = useState([5, 2, 35, 6, 2, 4, 8, 3, 9, 1, 7]);

  const divideArray = (arr) => {
    let divided = [arr];
    const result = [];
    while (divided.some((subArr) => subArr.length > 1)) {
      const newDivided = [];
      for (const subArr of divided) {
        const half = Math.ceil(subArr.length / 2);
        newDivided.push(subArr.slice(0, half));
        newDivided.push(subArr.slice(half));
      }
      result.push(newDivided);
      divided = newDivided;
    }
    result.push(divided);
    return result;
  };

  const renderDividedArrays = (arr) => {
    return arr.map((val, i) => (
      <span key={i} style={{ margin: 10 }}>
        {val}&nbsp;
      </span>
    ));
  };

  return (
    <div>
      <div>
        <h2>Original Array:</h2>
        <p>{myArray.join(", ")}</p>
        <h2>Divided Arrays:</h2>
        {divideArray(myArray).map((arr, index) => (
          <div key={index}>{renderDividedArrays(arr)}</div>
        ))}
      </div>
    </div>
  );
}

export default MergeSort;


*Good one
import React from "react";

function mergeArrays(arr) {
  const result = [];

  while (arr.length > 1) {
    const merged = [];

    for (let i = 0; i < arr.length; i += 2) {
      merged.push([...arr[i], ...arr[i + 1]].sort((a, b) => a - b));
    }

    arr.splice(0, arr.length, ...merged);
    result.push([...merged]);
  }

  return result;
}

function App() {
  const input = [
    [5],
    [2],
    [35],
    [],
    [6],
    [2],
    [4],
    [],
    [8],
    [3],
    [9],
    [],
    [1],
    [],
    [7],
    [],
  ];
  const output = mergeArrays(input);

  return (
    <div>
      <h2>Input:</h2>
      <pre>{JSON.stringify(input)}</pre>
      <h2>Output:</h2>
      {output.map((subarray, index) => (
        <div key={index}>
          <pre>{JSON.stringify(subarray)}</pre>
          {index < output.length - 1 && <br />}
        </div>
      ))}
    </div>
  );
}

export default App;



*/
