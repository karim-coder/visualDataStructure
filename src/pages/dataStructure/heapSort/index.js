import React, { useEffect, useState } from "react";

const TreeNode = ({ x, y, value }) => (
  <g transform={`translate(${x},${y})`}>
    <circle r="20" fill="white" stroke="black" strokeWidth="2" />
    <text y="8" x="-5" fontSize="16">
      {value}
    </text>
  </g>
);

const TreeLine = ({ x1, y1, x2, y2 }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth="1" />
);

const Tree = ({ x, y, node, level = 0, spacing = 120 }) => {
  const { value, leftChild, rightChild } = node;
  const nodeY = y + level * spacing;
  const lineY = nodeY + 20;

  return (
    <g>
      {leftChild && (
        <>
          <TreeLine
            x1={x}
            y1={lineY}
            x2={x - spacing}
            y2={lineY + spacing - 5}
          />
          <Tree
            x={x - spacing}
            y={nodeY + spacing}
            node={leftChild}
            level={level + 1}
            spacing={spacing / 2}
          />
        </>
      )}
      {rightChild && (
        <>
          <TreeLine
            x1={x}
            y1={lineY}
            x2={x + spacing}
            y2={lineY + spacing - 5}
          />
          <Tree
            x={x + spacing}
            y={nodeY + spacing}
            node={rightChild}
            level={level + 1}
            spacing={spacing / 2}
          />
        </>
      )}
      <TreeNode x={x} y={nodeY} value={value} />
    </g>
  );
};

const App = () => {
  const [arr1, setArr1] = useState([7, 2, 9, 4, 5, 3]);
  const [arr2, setArr2] = useState([7, 2, 9, 4, 5, 3]);
  const [arr, setArr] = useState([7, 2, 9, 4, 5, 3]);
  // const [tree, setTree] = useState(null);

  const buildMinHeap = (arr) => {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  };

  const heapify = (arr, n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  };

  buildMinHeap(arr);

  const buildMaxHeap = (arr) => {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      maxHeapify(arr, n, i);
    }
  };

  const generateBinaryTree = (arr, index) => {
    if (index >= arr.length) {
      return null;
    }

    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;

    const currentNode = {
      value: arr[index],
      leftChild: generateBinaryTree(arr, leftChildIndex),
      rightChild: generateBinaryTree(arr, rightChildIndex),
    };

    return currentNode;
  };
  const maxHeapify = (arr, n, i) => {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && arr[left] < arr[smallest]) {
      smallest = left;
    }
    if (right < n && arr[right] < arr[smallest]) {
      smallest = right;
    }

    if (smallest !== i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];

      maxHeapify(arr, n, smallest);
    }
  };
  buildMaxHeap(arr1);
  const minHeap = () => {
    generateBinaryTree(arr1, 0);
  };

  const tree = generateBinaryTree(arr1, 0);
  const maxHeapTree = generateBinaryTree(arr, 0);

  const handleGenerateArray = () => {
    const newArray = Array.from(
      { length: Math.floor(Math.random() * 15) + 1 },
      () => Math.floor(Math.random() * 20) + 1
    );
    setArr([...newArray]);
    setArr1([...newArray]);
    setArr2([...newArray]);
  };
  console.log("Tree: ", tree);

  return (
    <div>
      <button onClick={handleGenerateArray}>Generate Random Array</button>
      {/* <button onClick={minHeap}>Min Heap</button>x */}
      <div>{arr2.join(", ")}</div>
      <p>Max Heap</p>
      {tree && (
        <svg width="700" height="500">
          <Tree x={400} y={50} node={tree} />
        </svg>
      )}
      <p>Min Heap</p>
      <svg width="700" height="500">
        <Tree x={400} y={50} node={maxHeapTree} />
      </svg>
    </div>
  );
};

export default App;
